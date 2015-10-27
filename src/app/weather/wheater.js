angular.module( 'dashboard.weather', [
])
.config(function config( $stateProvider ) {
	$stateProvider.state( 'weather', {
		url: '/weather',
		views: {
			"main": {
				controller: 'WeatherCtrl',
				templateUrl: 'weather/weather.tpl.html'
			}
		},
		data:{ pageTitle: 'weather' }
	});
})
.controller( 'WeatherCtrl', ['$scope','Weather', function ($scope, Weather) {
	$scope.data = {
		city:{},
		toggle: 0,
		active: 1
    };

    Weather.getByCity({"city":"guadalajara,mx"}).$promise.then(function(data){
		$scope.data.city.weather = data.weather[0];
		$scope.data.city.main = data.main;
		$scope.data.city.wind = data.wind;
		$scope.data.city.name = data.name;
	});

    $scope.getWeather = function(cityfind,active){
    	Weather.getByCity({"city":cityfind}).$promise.then(function(data){
			$scope.data.city.weather = data.weather[0];
			$scope.data.city.main = data.main;
			$scope.data.city.wind = data.wind;
			$scope.data.city.name = data.name;
			$scope.data.active = active;
		});
    };
    $scope.searchCity = function(search){
    	Weather.getByCity({"city":search}).$promise.then(function(data){
			$scope.data.city.weather = data.weather[0];
			$scope.data.city.main = data.main;
			$scope.data.city.wind = data.wind;
			$scope.data.city.name = data.name;
			$scope.data.active = active;
		});
    };
}]);