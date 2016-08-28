var app = angular.module('exerciseApp', []);

app.controller('GradeController', GradeController)
.controller('KingController', KingController)
.controller('KeywordController', KeywordController);

app.filter('paging', function(){
    return function(array, page){
        var pageNum = page ? (page-1) * 10 : 0;
        return array.slice(pageNum, pageNum+10);
    }
});
