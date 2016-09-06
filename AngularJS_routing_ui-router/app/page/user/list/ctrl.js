app.controller("listCtrl",['$scope', '$rootScope', function($scope, $rootScope){
    const _this = this;
    _this.userList = $rootScope.userList;
}]);