/*----------------------------------------------------------------------------------------
START Model controller
HOW TO USE: Inherite model controller in your controller
SIZE: none: autosize, lg: large, sm: small
TEMPLATE-URL: Your angular-js template id
-----------------------------------------------------------------------------------------*/
htm.controller('ModelController', function ($scope, $modal, $log) {
  $scope.modalContents = {};
  $scope.animationsEnabled = true;
  $scope.open = function (configuration) {
    $scope.modalContents = configuration.data;
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: configuration.templateUrl,
      controller: 'ModalInstanceController',
      size: configuration.size,
      resolve: {
        modalContents: function () {
          return $scope.modalContents;
        }
      }
    });
    modalInstance.result.then(function (selectedContent) {
      $scope.selected = selectedContent;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
});
/*----------------------------------------------------------------------------------------
END Model controller
-----------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------
START ModalInstance Controller
-----------------------------------------------------------------------------------------*/
htm.controller('ModalInstanceController', function ($scope, $modalInstance, modalContents) {
  //Scopes inside model/popup
  $scope.modalContents = modalContents;
  $scope.selected = {
    content: $scope.modalContents[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.content);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
/*----------------------------------------------------------------------------------------
END ModalInstance Controller
-----------------------------------------------------------------------------------------*/