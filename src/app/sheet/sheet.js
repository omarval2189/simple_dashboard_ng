angular.module( 'dashboard.sheet', [
])
.config(function config( $stateProvider ) {
	$stateProvider.state( 'sheet', {
		url: '/sheet',
		views: {
			"main": {
				controller: 'SheetCtrl',
				templateUrl: 'sheet/sheet.tpl.html'
			}
		},
		data:{ pageTitle: 'sheet' }
	});
})
.controller( 'SheetCtrl', ['$scope', '$modal', '$rootScope', function ($scope, $modal, $rootScope) {
	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};

	$scope.data = {
      	contacts: [
	        {
	          id: 1,
	          name:"omar",
	          type:"friend",
	          email:"omar@email.com"
	        },
	        {
	          id: 2,
	          name:"alex",
	          type:"friend",
	          email:"alex@email.com"
	        },
	        {
	          id: 3,
	          name:"sara",
	          type:"family",
	          email:"sara@email.com"
	        },
	        {
	          id: 4,
	          name:"javier",
	          type:"business",
	          email:"javier@email.com"
	        }
      	],
      	toggle: 0
    };

    $scope.$on('addContact', function(event,data){ 
    	console.log(data); 
    });

    $scope.deleteContact = function(id){
    	var position = null;
    	angular.forEach($scope.data.contacts, function(value, key) {
    		if(value.id == id){
    			position = key;
    		}
		});
		$scope.data.contacts.remove(position);
    };

   	$scope.addModal = function() {
   		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: '../src/app/sheet/app_modal_add_sheet.html',
			controller: ['$scope', '$modalInstance', '$rootScope', function( $scope, $modalInstance, $rootScope){
				$scope.data = {
					newContact: {}
				};

				$scope.addContact = function(){
					$modalInstance.close($scope.data.newContact);
				};

				$scope.closeModal= function(){
					$modalInstance.close($modal);
				};
			}],
			resolve: {}
		});

		modalInstance.result.then(function(newContact) {
			$scope.data.contacts.push(newContact);
		}, function () {
			//$scope.getAllEvents();
		});
	};
    
}]);