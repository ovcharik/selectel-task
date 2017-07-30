import './styles/index.less';

import _ from 'underscore';

import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import * as appConfig from './config';
import appComponents  from './components';
import appServices    from './services';

let app = angular
  .module('app', [
    'ui.router',
    'app.services',
    'app.components',
  ])
  .constant('appConfig', appConfig.config)
  .config(appConfig.weatherApiHttp)
  .config(appConfig.router);
