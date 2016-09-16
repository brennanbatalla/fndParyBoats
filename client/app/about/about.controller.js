'use strict';
(function(){


angular.module('fndParyBoatsApp')
  .controller('aboutCtrl', ['$scope', 'dbService',function($scope, dbService){

        $scope.newsLetterEmail = "";
        $scope.emailAddedFlag = false; 



  	$scope.saveNewsLetterEmail = function(){
        dbService.saveNewsLetterEmail($scope.newsLetterEmail);
        $scope.newsLetterEmail = "";
        $scope.emailAddedFlag = true; 
      }



  }]);

})();
