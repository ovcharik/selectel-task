import angular from 'angular';

import notfound    from './notfound';
import weatherItem from './weather-item';
import city        from './city';
import page        from './page';

export default angular
  .module('app.components', [])
  .component('notfound', notfound)
  .component('weatherItem', weatherItem)
  .component('city', city)
  .component('page', page)
