/*
 *  Class to handle integration with the host environment.
 *
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { KBase } from '../../kbase/iframe-kbase-integration';

@Injectable()
export class KBaseIntegration {
    integration: KBase;
    //config: any;
    //token: string;
    //username: string;

    constructor(private router: Router) {
        this.integration = new KBase();
    }

    // methods for all interfaces to kbase.
    getConfig() : any {
        return KBase.config;
    }

    getToken() : string {
        return KBase.token;
    }

    getUsername() : string {
        return KBase.username;
    }

    isLoggedIn() {
        if (KBase.token) {
            return true;
        }
        return false;
    }


}