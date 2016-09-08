controllers
    .controller('mainCtrl', ['$scope', function($scope){

        $scope.isShow = false;

        $scope.sFunc = function(){
            alert('Thank you so much I Like you ');
            $scope.isShow = false;
        };

        $scope.cFunc = function(){
            alert('Just Say YES! You sun of...  a...  beach');
            $scope.isShow = false;
        }

    }]);
