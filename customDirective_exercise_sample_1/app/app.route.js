app
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('main', {
                url: '/main',
                controller: 'mainCtrl',
                templateUrl:'app/public/main/view.html'
            });
        $urlRouterProvider.otherwise('/main');
    })