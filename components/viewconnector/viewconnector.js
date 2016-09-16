angular.module('app.viewconnector', [])
    .controller("ViewConnectorController", ['$stateParams','listService',ViewConnectorController]);

function ViewConnectorController($stateParams,listService) {

    var _self = this;

    _self.index = $stateParams.index;
    _self.connectorArray = listService.connectorArray;
    _self.connectorObj = _self.connectorArray[_self.index];

}