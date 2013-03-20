'use strict';

function FrontPageController($scope) {

}

function ArchitectureController($scope) {
    console.log("Architecture Controller");
    $scope.$on('$viewContentLoaded', function() {
        console.log("  loading mathjax");
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
        document.getElementsByTagName("head")[0].appendChild(script);
//        window.location.reload();
    });
}

function MaterialsCommonsController($scope) {

}

function PeopleController($scope) {

}

function PublicationsController($scope) {

}