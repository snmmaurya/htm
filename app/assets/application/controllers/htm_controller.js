'use strict';

var htm = angular.module("htm", ["ngRoute", "ngResource", "ui.bootstrap", "globalModule", "xeditable", "ngAnimate", "textAngular", "angularFileUpload"]);


htm.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
/*----------------------------------------------------------------------------------------
START Header controller
-----------------------------------------------------------------------------------------*/
htm.controller("headerController", function($scope, $http){
	$scope.title = "HTM-Hola Task Manager";
});
/*----------------------------------------------------------------------------------------
END Header controller
-----------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------
START Menu controller
-----------------------------------------------------------------------------------------*/
htm.controller("menuController", function(globalAccess, $scope, $http, flashMessage, $controller, $timeout, $location, usersFactory){
  var insureUserSignin = false;
  $scope.$on('$routeChangeStart', function(next, current) {
    $scope.flash = false;

    $scope.flashes = flashMessage.getFlashMessage();

    if($scope.flashes.message !="")
    {
      $scope.flash = true;
      $timeout(function () { $scope.flash = false; }, 5000);
    }

    var promiseSynchronization = usersFactory.currentUser();
      promiseSynchronization.then(function(response) {
      $scope.currentUser = response; insureUserSignin = true;
    }, function(error) { });
    if(insureUserSignin==false){
      $location.path('/signin');
    }
  });
});
/*----------------------------------------------------------------------------------------
END Menu controller
-----------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------
START home controller
-----------------------------------------------------------------------------------------*/
htm.controller("homeController", function($scope, $http){
  $scope.title = "HTM-Hola Task Manager";
});
/*----------------------------------------------------------------------------------------
END home controller
-----------------------------------------------------------------------------------------*/





/*----------------------------------------------------------------------------------------
START home controller
-----------------------------------------------------------------------------------------*/
htm.controller("htmController", function($scope, $http, usersFactory, projectsFactory, tasksFactory, $controller, FileUploader){
  // $controller('datePickerController', {$scope: $scope});

  $scope.datepickerOptions = {
    format: 'yyyy-mm-dd',
    language: 'fr',
    startDate: "2012-10-01",
    endDate: "2012-10-31",
    autoclose: true,
    weekStart: 0
  }


  
  $scope.title = "HTM - Welcome";
  var promiseSynchronization = projectsFactory.projects();
    promiseSynchronization.then(function(response) {
    $scope.projects = response;;
  },function(error) { });

  var promiseSynchronization = usersFactory.users();
    promiseSynchronization.then(function(response) {
    $scope.users = response;;
  },function(error) { });

  $scope.selectProject = function(project_id){
    $scope.project = project_id;
    $scope.userTasks();
    $scope.taskDetailShow=false;
  };

  $scope.selectTask = function(task_id){
    $scope.task = task_id;
    $scope.taskDetailShow=true;
    $scope.userTaskDetails();
    $scope.showComments();
    $scope.initializeUploader();
  };

  $scope.selectUser = function(user_id){
    $scope.user = user_id;
  };

  //-------------------------------- TASK -------------------------------------//

  $scope.userTasks = function(){
    $scope.params = {
      project_id: $scope.project,
      user_id: $scope.user
    };
    var promiseSynchronization = tasksFactory.tasks($scope.params);
      promiseSynchronization.then(function(response) {
      $scope.tasks = response;;
    },function(error) { });
  }

  $scope.userTaskDetails = function(){
    $scope.params = {
      project_id: $scope.project,
      user_id: $scope.user,
      task_id: $scope.task
    };
    var promiseSynchronization = tasksFactory.task($scope.params);
      promiseSynchronization.then(function(response) {
      $scope.taskDetails = response;
    },function(error) { });
  }


  $scope.newTask = function(){
    $scope.showNewTaskForm=true;
  }


  $scope.createTask = function(params){
    var promiseSynchronization = tasksFactory.createTask(params);
      promiseSynchronization.then(function(response) {
      if(response.status=="ERROR"){
        htm.alertError();
      }else{
        $scope.task = response.id;
        $scope.showNewTaskForm=false;
        $scope.taskDetailShow=true;        
        $scope.userTaskDetails();
        $scope.showComments();
      }
    },function(error) { });
  }

  $scope.updateTask = function (task) {
    var promiseSynchronization = tasksFactory.updateTask(task);
      promiseSynchronization.then(function(response) {
      $scope.taskDetails = response;
      $scope.userTasks();
    },function(error) { });
  };



  $scope.assignTo = function(user_id){
    $scope.params = {
      project_id: $scope.project,
      user_id: user_id,
      task_id: $scope.task
    };

   // params = {user_id: user_id, project_id: $scope.project_id, task_id: $scope.task_id}
    var promiseSynchronization = tasksFactory.assignTo($scope.params);
      promiseSynchronization.then(function(response) {
      $scope.userTaskDetails();
      $scope.userTasks();
    },function(error) { });
  }




  $scope.createComment = function(params){
    var promiseSynchronization = tasksFactory.createComment(params);
      promiseSynchronization.then(function(response) {
      $scope.showComments();
    },function(error) { });
  }

  $scope.updateComment = function(params){
    var promiseSynchronization = tasksFactory.updateComment(params);
      promiseSynchronization.then(function(response) {
    },function(error) { });
  }
  

  $scope.showComments = function(){
    $scope.params = {
      task_id: $scope.task
    }
     var promiseSynchronization = tasksFactory.showComments($scope.params);
      promiseSynchronization.then(function(response) {
      $scope.comments=response;
    },function(error) { });
  }
  var taskBaseUrl = "/tasks/";
  $scope.uploader = new FileUploader({url: taskBaseUrl+"upload/?project_id="+$scope.project+"&task_id="+$scope.task});

  $scope.initializeUploader = function(){    
    $scope.uploader = new FileUploader({url: taskBaseUrl+"upload/?project_id="+$scope.project+"&task_id="+$scope.task});
  } 


  $scope.initializeUploader();

});
/*----------------------------------------------------------------------------------------
END home controller
-----------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------
START home controller
-----------------------------------------------------------------------------------------*/
// htm.controller("datePickerController", function($scope){
//   $scope.datepickerOptions = {
//     format: 'yyyy-mm-dd',
//     language: 'fr',
//     startDate: "2012-10-01",
//     endDate: "2012-10-31",
//     autoclose: true,
//     weekStart: 0
//   }
// });
/*----------------------------------------------------------------------------------------
END home controller
-----------------------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------------------
Start Custom Methods
-----------------------------------------------------------------------------------------*/
htm.console = function(information){
  if(Object.prototype.toString.call(information) === '[object String]'){
   console.log("------------------------ "+ information + " ------------------------");
  }
  else{
    console.log(information==undefined ? "Requested Data Not Found" : information); 
  }
};

// htm.alertError = function(information=""){
//   alert("Unable to process: "+information);
// };
/*----------------------------------------------------------------------------------------
END Custom Methods
-----------------------------------------------------------------------------------------*/