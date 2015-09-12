/*----------------------------------------------------------------------------------------
Start Factory
-----------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------
Users Factory
-----------------------------------------------------------------------------------------*/
htm.factory("usersFactory", function($resource, $http){
  var usersFactory = {};
  var commonFactoryBaseUrl = "/users/";
  usersFactory.signIn = function(credentials){
    return $http.post(commonFactoryBaseUrl+"signin", credentials, {format: 'json'}).then(function(result){
      return result.data;
    });
  }

  usersFactory.currentUser = function(){
    return $http.get(commonFactoryBaseUrl+"current_user", {format: 'json'}).then(function(result){
      return result.data;
    });
  }

  usersFactory.users = function(){
  	return $http.get(commonFactoryBaseUrl+"users", {format: 'json'}).then(function(result){
      return result.data;
    });
  }

  return usersFactory;
});
/*----------------------------------------------------------------------------------------
END
-----------------------------------------------------------------------------------------*/




/*----------------------------------------------------------------------------------------
Projects Factory
-----------------------------------------------------------------------------------------*/
htm.factory("projectsFactory", function($resource, $http){
  var projectsFactory = {};
  var commonFactoryBaseUrl = "/projects/";
  projectsFactory.projects = function(){
    return $http.get(commonFactoryBaseUrl+"projects", {format: 'json'}).then(function(result){
      return result.data;
    });
  }

  return projectsFactory;
});
/*----------------------------------------------------------------------------------------
END
-----------------------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------------------
Task Factory
-----------------------------------------------------------------------------------------*/
htm.factory("tasksFactory", function($resource, $http){
  var tasksFactory = {};
  var commonFactoryBaseUrl = "/tasks/";
  tasksFactory.tasks = function(params){
    htm.console(params);
    return $http.get(commonFactoryBaseUrl+"tasks", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }


  tasksFactory.task = function(params){
    htm.console(params);
    return $http.get(commonFactoryBaseUrl+"task", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }

  tasksFactory.createTask = function(params){
    return $http.post(commonFactoryBaseUrl+"create_task", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }

  tasksFactory.updateTask = function(params){
    return $http.put(commonFactoryBaseUrl+"update_task", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }


  tasksFactory.assignTo = function(params){
    return $http.post(commonFactoryBaseUrl+"assign_to", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }


  tasksFactory.createComment = function(params){
    return $http.post(commonFactoryBaseUrl+"create_comment", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }

  tasksFactory.updateComment = function(params){
    return $http.put(commonFactoryBaseUrl+"update_comment", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }

  tasksFactory.showComments = function(params){
    return $http.get(commonFactoryBaseUrl+"comments", {params: params, format: 'json'}).then(function(result){
      return result.data;
    });
  }

  return tasksFactory;
});
/*----------------------------------------------------------------------------------------
END
-----------------------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------------------
Projects Factory
-----------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------
END
-----------------------------------------------------------------------------------------*/