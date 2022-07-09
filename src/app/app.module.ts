import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { createAnimation, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot({
      navAnimation: (baseEl, opts) => {
        const { enteringEl, leavingEl } = opts;
        const DURATION = 300;
        // root animation with common setup for the whole transition
        const rootTransition = createAnimation()
          .duration(opts.duration || DURATION)
          .easing('cubic-bezier(0.3,0,0.66,1)');

        // ensure that the entering page is visible from the start of the transition
        const enteringPage = createAnimation()
          .addElement(enteringEl)
          .beforeRemoveClass('ion-page-invisible');

        // create animation for the leaving page
        const leavingPage = createAnimation().addElement(leavingEl);

        // actual customized animation
        if (opts.direction === 'forward') {
          enteringPage.fromTo('transform', 'translateX(100%)', 'translateX(0)');
          leavingPage.fromTo('opacity', '1', '0.25');
        } else {
          leavingPage.fromTo('transform', 'translateX(0)', 'translateX(100%)');
          enteringPage.fromTo('opacity', '0.25', '1');
        }

        return rootTransition.addAnimation([enteringPage, leavingPage]);
      }
    }),
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Device],
  bootstrap: [AppComponent],
})
export class AppModule {}
