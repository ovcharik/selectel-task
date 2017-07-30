export default function router($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'main' });

  $stateProvider.state('main', {
    url: '/',
    component: 'page',
  });
}
