angular.module('dashboard.resources.weather', [
	'ngResource'
])
.factory('Weather', ['$resource', 'ApiConfig', function($resource, apiConfig) {

	var config = apiConfig.get();

	var resource = $resource(
		config.baseUrl + 'weather?q=Guadalajara,mx&appid=bd82977b86bf27fb59a04b61b657fb6f',
		{
			city: "@city"
		},
	    {
	       	getByCity: {
	        	method:'GET',
	        	url: config.baseUrl + 'weather?q=:city&appid=bd82977b86bf27fb59a04b61b657fb6f'
	        }
	    }
    );

	return resource;
}]);