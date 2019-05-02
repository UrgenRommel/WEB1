var questApp = angular
  .module("questApp", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.when("/second", {
      templateUrl: "./second.html",
      controller: "AnswerController"
    });
    $routeProvider.when("/ferst", {
      templateUrl: "./ferst.html",
      controller: "AnswerController"
    });
    $routeProvider.otherwise({ redirectTo: "/second" });
  });
