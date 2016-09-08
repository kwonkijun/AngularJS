var app = angular.module('testApp', [
    'ui.router',
    'testApp.directives',
    'testApp.controllers'
]);

var controllers = angular.module('testApp.controllers', []);
var directives = angular.module('testApp.directives', []);
var services = angular.module('testApp.services', []);