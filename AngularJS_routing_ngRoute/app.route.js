app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "main/view.html",
            controller : "mainCtrl"
        })
        .when("/header", {
            templateUrl : "header/view.html",
            controller : "headerCtrl"
        })
        .when("/contents", {
            templateUrl : "contents/view.html",
            controller : "contentsCtrl"
        });
});
