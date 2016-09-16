angular.module('app.connectors', [])
    .controller("ConnectorController", ['listService',ConnectorController]);

function ConnectorController(listService) {

    var _self = this;
    _self.connectorArray = listService.connectorArray;


}