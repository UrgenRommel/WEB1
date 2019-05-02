var questApp = angular
  .module("questApp", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.when("/second", {
      templateUrl: "./second.html",
    });
    $routeProvider.when("/ferst", {
      templateUrl: "./ferst.html",
    });
    $routeProvider.otherwise({ redirectTo: "/r" });
  });
