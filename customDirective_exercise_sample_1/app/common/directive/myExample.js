//hello world!
directives
    .directive('myExample', function(){
        return{
            restrict: 'E',
            scope : {
                successCallback : '&',
                cancelCallback : '&',
                display : '=',
                title : '='
            },
            link : function(scope, element){
                scope.title = element[0].getAttribute('message');
            },
            template : ''+
                '<div ng-show="display" class="popUp-contents">' +
                '<p>{{title}}</p>' +
                '<button ng-click="successCallback()">Yes</button>' +
                '<button ng-click="cancelCallback()">No</button>'+
                '</div>'
        }
    });