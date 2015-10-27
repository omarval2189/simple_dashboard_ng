angular.module( 'dashboard.resources', [
	'dashboard.resources.weather'
])

.factory('ApiConfig', function() {
	var apiConfig = {
		constants: {
			baseUrl: "http://api.openweathermap.org/data/2.5/"
		}
	};
	
	apiConfig.get = function() {
		return apiConfig.constants;
	};

	return apiConfig;
});