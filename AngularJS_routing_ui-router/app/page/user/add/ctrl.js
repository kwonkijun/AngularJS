app.controller("addCtrl",['$scope', '$rootScope', function($scope, $rootScope){
    const _this = this;
    _this.userName = '';
    $rootScope.userList = [];

    _this.addUser = function(){
        $rootScope.userList.push(_this.userName);
        alert('User add complete!');
    }

}]);