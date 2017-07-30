export default {
  template: require('./page.pug'),
  controller: function($state, $stateParams) {
    this.city = $stateParams.city;
    this.search = () => {
      $state.go('search.city', { city: this.city });
    };
  },
}
