
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { RootModule } from './app/root.module';

console.info('angular2 instantiation');
platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(RootModule);
