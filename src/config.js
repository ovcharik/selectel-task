export const config = {
  OPEN_WEATHER_MAP_APP_ID: '832c958ee90ef9e83f86334ba75ef322',
}

export const router = ($stateProvider, $urlServiceProvider) => {
  $urlServiceProvider.rules.otherwise({ state: 'app' });

  $stateProvider.state('app', {
    url: '/',
    component: 'page',
    resolve: {
      city: () => null,
    }
  });

  $stateProvider.state('search', {
    abstract: true,
    url: '/search',
    component: 'page',
  });

  $stateProvider.state('notfound', {
    url: '/404',
    component: 'notfound',
  });

  $stateProvider.state('search.city', {
    url: '/:city',
    component: 'city',
    resolve: {
      city: ($stateParams) => $stateParams.city,
      details: ($stateParams, weatherApiService, $state) => {
        const city = $stateParams.city;
        return weatherApiService
          .details(city)
          .catch((e) => $state.go('notfound'));
      },
    },
  });
}

export const weatherApiHttp = ($httpProvider) => {
  $httpProvider.interceptors.push((appConfig, $state) => {
    return {
      request: (config) => {
        if (/api\.openweathermap\.org\/data/.test(config.url)) {
          config.params = config.params || {};
          config.params['appid'] = appConfig.OPEN_WEATHER_MAP_APP_ID;
        }
        return config;
      },
    };
  });
}
