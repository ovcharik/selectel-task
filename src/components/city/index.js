export default {
  template: require('./city.pug'),
  bindings: {
    city: '<',
    details: '<',
  },
  controller: function() {
    this.sortBy = '+dt';
  },
}
