angular.module( 'dashboard', [
	'templates-app',
	'templates-common',
	'dashboard.home',
	'dashboard.sheet',
	'dashboard.weather',
	'dashboard.resources',
	'dashboard.ui',
	'ui.bootstrap',
	'ngAnimate',
	'ui.router',
	'slick'
])
.config( function myAppConfig ( $stateProvider, $locationProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/home' );
	$locationProvider.hashPrefix('!');
})
.run(function run ($state, $rootScope) {
	$rootScope.$on('$stateChangeSuccess', function () {
		window.scrollTo(0,0);
	});
})
.controller( 'AppCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if ( angular.isDefined( toState.data.pageTitle ) ) {
			$scope.pageTitle = toState.data.pageTitle + ' | Ejemplo' ;
		}
	});
	$scope.data = {
		toggle: 0
	};
	$scope.toggleMenu = function(toggle){
		if($('.menu').css('left')==='-220px'){
			$('.menu').animate({"left":"+=220"},600);
			$('.main-container').animate({"left":"+=220"},600);
		}else{
			$('.menu').animate({"left":"-=220"},600);
			$('.main-container').animate({"left":"-=220"},600);
		}
		//$scope.data.toggle = (toggle) ? 0 : 1;
	};
	$('.main-container').css('height',$(window).height());
}]);