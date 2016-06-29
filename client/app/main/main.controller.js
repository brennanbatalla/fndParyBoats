'use strict';

(function() {
  angular.module('fndParyBoatsApp')
    .controller('mainCtrl', function MainController($scope, $mdDialog, $state, util, dbService) {

        $scope.active = 0;
        $scope.openLoginDialog = openLoginDialog;
        $scope.zipCode;
        $scope.search = search;
        //$scope.test = test;
        $scope.featuredClick = featuredClick;
        $scope.featBoats = util.featuredList;

        $scope.$watch(function(){
          $scope.userFlag = dbService.getCurrentUser();
        });



        util.getCurrentPosition().then(function(data){
          if(util.featuredList.length < 1){
            dbService.getFeaturedCharterByZip(data.coords.latitude, data.coords.longitude)
              .then(function(data){
                console.log(data);
                $scope.featBoats = data;
              });
          }

        });



        //======= functions ===========

        function search(){
          //console.log();
          util.stateSelected = null;
          util.charterList = [];
          util.zipCode = $scope.zipCode;
          $state.go('searchList')
        }

        function featuredClick(x){
          $state.go('boatProfile');
          util.setCharter(x);
        }

        function openLoginDialog(ev){

          $mdDialog.show({
            controller: 'loginCtrl',
            templateUrl: '../../Dialogs/loginDialog/loginDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
          });

        }

      $scope.test = function(){
        console.log('Test');
      }



      }
    )

})();
