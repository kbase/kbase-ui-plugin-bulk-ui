import { Injectable } from '@angular/core';
import { KBase } from '../../kbase/iframe-kbase-integration';

@Injectable()
export class KBaseConfig {
    constructor() {
    }

    getConfig() {
        return KBase.config;
    }
}