// Angular 2 Universal
import {
  REQUEST_URL,
  ORIGIN_URL,
  NODE_LOCATION_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// Application
import { StartAppComponent, APP_ROUTER_PROVIDERS } from './app';

export function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config: ExpressEngineConfig = {
    directives: [
      StartAppComponent
    ],
    platformProviders: [
      { provide: ORIGIN_URL, useValue: 'http://localhost:3000' },
      { provide: APP_BASE_HREF, useValue: baseUrl }
    ],
    providers: [
      { provide: REQUEST_URL, useValue: url },
      APP_ROUTER_PROVIDERS,
      NODE_HTTP_PROVIDERS,
      NODE_LOCATION_PROVIDERS
    ],
    async: true,
    preboot: false // { appRoot: 'start-app' } your top level app component selector
  };

  res.render('index', config);
}
