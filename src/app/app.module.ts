import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'sobatbisnis-web' }),
    BrowserTransferStateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
