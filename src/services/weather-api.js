export default ($http) => {
  return {
    details: (city, count = 14) => {
      return $http
        .get('http://api.openweathermap.org/data/2.5/forecast/daily', {
          params: {
            q: city,
            cnt: count,
            units: 'metric',
            lang: 'ru',
          },
          cache: true,
        })
        .then((resp) => resp.data);
    }
  }
}
