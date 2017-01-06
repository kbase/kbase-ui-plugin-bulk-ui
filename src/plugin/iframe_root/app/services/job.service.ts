import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { KBaseRpc } from './kbase-rpc.service';
import { KBaseAuth } from './kbase-auth.service'
import { FtpService } from './ftp.service';

interface FileMeta {
    importName: string; // only require import name in meta?
}

interface File {
    path: string;
    meta: FileMeta;
}

@Injectable()
export class JobService {

    constructor(private rpc: KBaseRpc,
                private auth: KBaseAuth,
                private ftp: FtpService) {

    }

    runGenomeTransform(f: File,  workspace: string) {
        let params = {
            method: "genome_transform.genbank_to_genome",
            service_ver: 'dev',
            params: [{
                genbank_file_path: this.ftp.getRootDirectory()+f.path,
                workspace: workspace,
                genome_id: f.meta.importName,
                contigset_id: f.meta['contigsetName']
            }]
        }

        return this.rpc.call('njs', 'run_job', params);
    }

    runGenomeTransforms(files: File[], workspace: string) {
        var reqs = [];
        files.forEach(file => reqs.push( this.runGenomeTransform(file, workspace) ) );
        return Observable.forkJoin(reqs)
    }

    runReadsImport(f: File,  workspace: string) {
        let params = {
            method: "genome_transform.reads_to_assembly",
            service_ver: 'dev',
            params: [{
                workspace : workspace,              //'janakakbase:1464032798535',
                reads_id:  f.meta.importName,       //'TestFrag',
                reads_type: f['paths'] ? 'PairedEndLibrary' : 'SingleEndLibrary',
                file_path_list: f['paths'] ? f['paths'] : [this.ftp.getRootDirectory()+f.path],   //["/kb/module/data/frag_1.fastq","/kb/module/data/frag_2.fastq"],
                insert_size: f.meta['insert_size'],
                std_dev: f.meta['std_dev'],
                sra: f.meta['sra'] ? "1" : "0"  // expects strings instead of booleans
            }]
        }


        return this.rpc.call('njs', 'run_job', params);
    }


    runReadsImports(files: File[], workspace: string) {
        var reqs = [];
        files.forEach(file => reqs.push( this.runReadsImport(file, workspace) ) );
        return Observable.forkJoin(reqs)
    }

    checkJob(jobId: string) {
        return this.rpc.call('njs', 'check_job', [jobId], true)
    }

    checkJobs(jobIds: string[]) {
        var reqs = [];
        jobIds.forEach(jobId => reqs.push( this.checkJob(jobId) ) )
        return Observable.forkJoin(reqs)
    }

    getJobLogs(jobId: string) {
        return this.rpc.call('njs', 'get_job_logs', {job_id: jobId, skip_lines: 0})
    }


    /**
     *  Unused methods
     */
    //setState(jobId: string){
    //    return this.rpc.call('ujs', 'set_state', ['bulkupload', jobId, ''], true)
    //}

    //listState() {
    //    return this.rpc.call('ujs', 'list_state', ['bulkupload', 0], true)
    //}

    getJobParams(jobId: string) {
        return this.rpc.call('njs', 'get_job_params', [jobId], true)
    }

}