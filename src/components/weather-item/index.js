import moment from 'moment';

export default {
  template: require('./weather-item.pug'),
  bindings: {
    data: '<',
  },
  controller: function() {
    this.dt2date = (dt) => moment(dt * 1000).locale('ru').format('L');
    this.pa2merc = (pa) => Math.round(pa * 0.750062);
  },
}
