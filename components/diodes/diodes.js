angular.module('app.diodes', [])
    .controller("DiodeController", ['listService',DiodeController]);

function DiodeController(listService) {

    var _self = this;
    _self.diodeArray = listService.diodeArray;


}