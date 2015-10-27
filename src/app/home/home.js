angular.module( 'dashboard.home', [
	'ui.router'
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/home',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/home.tpl.html'
			}
		},
		data:{ pageTitle: 'Inicio' }
	});
})
.controller( 'HomeCtrl', ['$scope', function ($scope) {
}]);