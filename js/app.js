angular.module("demoApp", [
    'ui.router',
    'app.home',
    'app.allList',
    'app.semi',
    'app.diodes',
    'app.connectors',
    'app.viewsemi',
    'app.viewdiode',
    'app.viewconnector'
])
    .controller('mainController', ['listService',mainController]);

function mainController(listService) {
    var _self = this;

    _self.arr1 = listService.semiArray;
    _self.arr2 = listService.diodeArray;
    _self.arr3 = listService.connectorArray;
}

angular.module('demoApp')
    .directive('menuClose', function () {
        return {
            restrict: 'AC',
            link: function ($scope, $element) {
                $element.bind('click', function () {
                    var drawer = angular.element(document.querySelector('.mdl-layout__drawer'));
                    if (drawer) {
                        drawer.toggleClass('is-visible');
                    }
                });
            }
        };
    });