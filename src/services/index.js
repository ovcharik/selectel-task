import angular from 'angular';

import weatherApi from './weather-api';

export default angular
  .module('app.services', [])
  .service('weatherApiService', weatherApi)
