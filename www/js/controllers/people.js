shnurpleModule
  .controller('peopleCtrl', ['$scope',
    function($scope) {
      $scope.people = [
        {
          name: "eric"
        }, 
        {
          name: "robert"
        }
      ]
    }
  ])