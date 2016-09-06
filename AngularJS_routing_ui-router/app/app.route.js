app
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('container', {
                url : '/main',
                templateUrl:'app/page/header.html',
                views : {
                    'headerContainer' : {
                        templateUrl : 'app/page/header.html',
                        controller : 'headerCtrl'
                    },
                    'footerContainer' : {
                        templateUrl : 'app/page/footer.html'
                    }
                }

            })
            .state('container.user',{
                url : '/user',
                views : {
                    'mainContainer@' : {
                        templateUrl : 'app/page/user/container.html'
                    }
                }
            })
            .state('container.user.add', {
                url : '/add',
                views : {
                    'userContainer' : {
                        templateUrl : 'app/page/user/add/view.html',
                        controller : 'addCtrl',
                        controllerAs : 'ctrl'
                    }
                }
            })
            .state('container.user.list', {
                url: '/list',
                views : {
                    'userContainer' : {
                        templateUrl : 'app/page/user/list/view.html',
                        controller : 'listCtrl',
                        controllerAs : 'ctrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('/main');
    });
