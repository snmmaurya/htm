/*----------------------------------------------------------------------------------------
START Router controller
-----------------------------------------------------------------------------------------*/
htm.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'home',
      controller: 'homeController'
    }).
    when('/signin', {
      templateUrl: 'signin',
      controller: 'usersController'
    }).
    when('/htm', {
      templateUrl: 'htm',
      controller: 'htmController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
/*----------------------------------------------------------------------------------------
End Router controller
-----------------------------------------------------------------------------------------*/