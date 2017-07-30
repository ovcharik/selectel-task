import './styles/index.less';

import _ from 'underscore';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import appRouter from './router';
import appComponents from './components';

let app = angular
  .module('app', [
    'ui.router',
    'app.components',
  ])
  .config(appRouter);
