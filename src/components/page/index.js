export default {
  template: require('./page.pug'),
  controller: function($state, $stateParams) {
    this.city = $stateParams.city;
    this.search = () => {
      if (!this.city) return;
      $state.go('search.city', { city: this.city });
    };
  },
}
