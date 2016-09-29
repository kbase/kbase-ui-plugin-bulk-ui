import {KBase} from '../kbase/iframe-kbase-integration';

// declare var CONFIG:any

//export const config = {
//    config: CONFIG,
//    productionMode: false
//}
 
/*
export const configx = {
    config: CONFIG,    
    endpoints: {
        njs: "https://ci.kbase.us/services/njs_wrapper",
        ujs: "https://ci.kbase.us/services/userandjobstate",
        ws: "https://ci.kbase.us/services/ws",                   // workspace service
        ftpApi: "https://ci.kbase.us/services/kb-ftp-api/v0",    //"http://localhost:3000/v0",
    },
    loginUrl: "https://narrative.kbase.us/#login",
    narrativeUrl: "https:/x/narrative-ci.kbase.us/narrative",
    contactUrl: "http://kbase.us/contact-us/",
    // true: token will be parsed from cookie
    // false: token be parsed from app/dev-token.ts and stored in cookie
    productionMode: false
}
*/

export class KBaseConfig {
    constructor() {
    }

    getConfig() {
        return KBase.config;
    }
}