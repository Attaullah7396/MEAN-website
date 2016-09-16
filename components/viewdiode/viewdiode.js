angular.module('app.viewdiode', [])
    .controller("ViewDiodeController", ['$stateParams','listService',ViewDiodeController]);

function ViewDiodeController($stateParams,listService) {

    var _self = this;

    _self.index = $stateParams.index;
    _self.diodeArray = listService.diodeArray;
    _self.diodeObj = _self.diodeArray[_self.index];

}