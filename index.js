angular.module('app', []);
angular.module('app').controller('Controller', Controller);


function Controller($scope){
    $scope.test = 'angular connected'
}