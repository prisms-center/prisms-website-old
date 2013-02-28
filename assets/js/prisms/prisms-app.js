'use strict';

var app = angular.module('prisms', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/prisms', {templateUrl:'partials/front-page.html', controller:FrontPageController}).
        when('/prisms/architecture', {templateUrl:'partials/architecture.html', controller:ArchitectureController}).
        when('/prisms/materialscommons', {templateUrl:'partials/materialscommons.html', controller:MaterialsCommonsController}).
        when('/prisms/people', {templateUrl:'partials/people.html', controller:PeopleController}).
        when('/prisms/publications', {templateUrl:'partials/publications.html', controller:PublicationsController}).
        otherwise({redirectTo:'/prisms'});
}]);

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (matchesPartial(next, "partials/front-page")) {
            setActiveTab("#home");
        }
        else if (matchesPartial(next, "partials/architecture")) {
            setActiveTab("#architecture");
        }
        else if (matchesPartial(next, "partials/materialscommons")) {
            setActiveTab("#materialscommons");
        }
        else if (matchesPartial(next, "partials/people")) {
            setActiveTab("#people");
        }
        else if (matchesPartial(next, "partials/publications")) {
            setActiveTab("#publications");
        }
    });
});

function matchesPartial(next, what) {
    if (!next.templateUrl) {
        return false;
    }
    else {
        return next.templateUrl.indexOf(what) != -1;
    }
}