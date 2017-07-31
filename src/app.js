import './styles/index.less';

import angular  from 'angular';
import uiRouter from '@uirouter/angularjs';

import * as appConfig from './config';
import appComponents  from './components';
import appServices    from './services';

const app = angular
  .module('app', [
    'ui.router',
    'app.services',
    'app.components',
  ])
  .constant('appConfig', appConfig.config)
  .config(appConfig.weatherApiHttp)
  .config(appConfig.router);
