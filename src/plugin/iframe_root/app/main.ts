import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

export class Launcher {
    launch(data:any) {
        enableProdMode();
        platformBrowserDynamic().bootstrapModule(AppModule);
    }
}
