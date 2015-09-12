/*----------------------------------------------------------------------------------------
START Header controller
-----------------------------------------------------------------------------------------*/
htm.controller("usersController", function($scope, $http, usersFactory, flashMessage, $location){

	$scope.credentials = {
	  email: 'hola@holachef.com',
	  password: 'password',
	  username: 'common'
	};

	$scope.signIn = function(){
		console.log($scope.credentials);
		usersFactory.signIn($scope.credentials).then(function(user) {
		if(user==undefined){
			$scope.errorMessage = "Email or Password in not Correct!";
			$scope.error = true;
		}else{
			flashMessage.setFlashMessage("Signed in Successfully", 'success');
			$location.path('/htm');
		}		
		}, function(error) {
		$scope.loginError = true;
		$scope.message = {message: "Login Error: "+error.data.error+" If you forgot password try to restore your password using forgot password button.", type: "danger"};
		});
	};
});
/*----------------------------------------------------------------------------------------
ENE Header controller
-----------------------------------------------------------------------------------------*/