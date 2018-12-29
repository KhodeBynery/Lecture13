(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
// Initialize the filter control
.filter('loves', lovesFilter)

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    // Override the message
    msg = lovesFilter(msg)
    return msg;

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

//Create a filter factory function
function LovesFilter() {
  return function (input) {
    input = input || ""; // empty string
    input = input.replace("likes", "loves");
    return input;
  };
}

})();
