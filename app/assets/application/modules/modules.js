var globalModule = angular.module('globalModule', ["ngRoute"]);

globalModule.factory('factoryName', function() {/* stuff here */});

globalModule.directive('directiveName', function() {/* stuff here */});

globalModule.service("flashMessage", function($rootScope){

  this.message = {message: '', type: ''};

  this.getFlashMessage = function(){
    var msg = this.message;
    this.message = {message: '', type: ''};
    return msg;
  };
  this.setFlashMessage = function(message, type){
    this.message = {message: message,  type: type}
  };

  this.broadcast = function (state) {
    $rootScope.$broadcast('state.update', state);
  };
});

globalModule.factory("globalAccess", function(){
  var factory = { };
  var accesses = {
    email: "", username: "",
    title: "Snm Maurya | Solutions",
    totalItems: 10,
    itemsPerPage: 2,
    numPerPage: 2
  };
  factory.getGlobalAccess = function(key){
    return accesses[key];
  };
  factory.globalAccess = function(){
    return accesses;
  };
  factory.setGlobalAccess = function(key, data){
    accesses[key] = data;
  };
  return factory;
});


globalModule.controller("progressOFViewLoading", function($scope){
  $scope.isViewLoading = false;
  $scope.$on('$routeChangeStart', function() {
    $scope.isViewLoading = true;
  });
  $scope.$on('$routeChangeSuccess', function() {
    $scope.isViewLoading = false;
  });
  $scope.$on('$routeChangeError', function() {
   $scope.isViewLoading = false;
  });
});


var deviseModule = angular.module('deviseModule', ["Devise"]);
  deviseModule.service("deviseService", function(Auth){
  this.currentUser = function(){
    return Auth.currentUser();
  };
});