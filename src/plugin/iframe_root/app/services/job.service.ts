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
            method: "genome_transform.genbank_to_genome_GFU",
            service_ver: 'dev',
            params: [{
                file_path: f.path.split("/").slice(2).join("/"), //this.ftp.getRootDirectory()+f.path
                workspace: workspace,
                genome_name: f.meta.importName,
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

    runSRAImport(f: File,  workspace: string) {
        let params = {
            method: 'genome_transform.sra_reads_to_library',
            service_ver: 'dev',
            params: [{
                wsname: workspace,              //'janakakbase:1464032798535',
                name:  f.meta.importName,       //'TestFrag',
                interleaved:  0,       //'0',
                read_orientation_outward: parseInt(f.meta['read_orientation_outward'] ? '1' : '0'),       //'0',
                single_genome: parseInt(f.meta['single_genome'] ? '0' : '1'),     //'0',
                sequencing_tech: f.meta['sequencing_tech'],
                strain: f.meta['strain'],
                source: f.meta['source'],
                reads_type: 'PairedEndLibrary',
                file_path_list: f['paths'] ? f['paths'] : [this.ftp.getRootDirectory()+f.path],   //["/kb/module/data/frag_1.fastq","/kb/module/data/frag_2.fastq"],
                insert_size_mean: parseFloat(f.meta['insert_size']),
                insert_size_std_dev: parseFloat(f.meta['std_dev'])
            }]
        }


        return this.rpc.call('njs', 'run_job', params);
    }


    runSRAImports(files: File[], workspace: string) {
        var reqs = [];
        files.forEach(file => reqs.push( this.runSRAImport(file, workspace) ) );
        return Observable.forkJoin(reqs)
    }

    runLibraryImport(f: File,  workspace: string) {
        let params = {
            method: 'genome_transform.reads_to_library',
            service_ver: 'dev',
            params: [{
                wsname: workspace,              //'janakakbase:1464032798535',
                name:  f.meta.importName,       //'TestFrag',
                interleaved:  0,       //'0',
		read_orientation_outward: parseInt(f.meta['read_orientation_outward'] ? '1' : '0'), 	//'0',
		single_genome: parseInt(f.meta['single_genome'] ? '0' : '1'), 	//'0',
		sequencing_tech: f.meta['sequencing_tech'],
		strain: f.meta['strain'],
		source: f.meta['source'],
                reads_type: f['paths'] ? 'PairedEndLibrary' : 'SingleEndLibrary',
                file_path_list: f['paths'] ? f['paths'] : [this.ftp.getRootDirectory()+f.path],   //["/kb/module/data/frag_1.fastq","/kb/module/data/frag_2.fastq"],
                insert_size_mean: parseFloat(f.meta['insert_size']),
                insert_size_std_dev: parseFloat(f.meta['std_dev'])
            }]
        }


        return this.rpc.call('njs', 'run_job', params);
    }


    runLibraryImports(files: File[], workspace: string) {
        var reqs = [];
        files.forEach(file => reqs.push( this.runLibraryImport(file, workspace) ) );
        return Observable.forkJoin(reqs)
    }

    runInterleavedLibraryImport(f: File,  workspace: string) {
        let params = {
            method: 'genome_transform.reads_to_library',
            service_ver: 'dev',
            params: [{
                wsname: workspace,              //'janakakbase:1464032798535',
                name:  f.meta.importName,       //'TestFrag',
                interleaved:  1,       //'0',
                read_orientation_outward: 0,    //'0',
                single_genome: parseInt(f.meta['single_genome'] ? '0' : '1'),       //'0',
                sequencing_tech: f.meta['sequencing_tech'],
                strain: f.meta['strain'],
                source: f.meta['source'],
                reads_type: 'PairedEndLibrary',
                file_path_list: f['paths'] ? f['paths'] : [this.ftp.getRootDirectory()+f.path],   //["/kb/module/data/frag_1.fastq","/kb/module/data/frag_2.fastq"],
                insert_size_mean: parseFloat(f.meta['insert_size']),
                insert_size_std_dev: parseFloat(f.meta['std_dev'])
            }]
        }


        return this.rpc.call('njs', 'run_job', params);
    }


    runInterleavedLibraryImports(files: File[], workspace: string) {
        var reqs = [];
        files.forEach(file => reqs.push( this.runInterleavedLibraryImport(file, workspace) ) );
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
