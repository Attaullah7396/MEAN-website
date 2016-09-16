angular.module('app.semi', [])
    .controller("SemiController", ['listService',SemiController]);

function SemiController(listService) {

  var _self = this;

  _self.semiArray = listService.semiArray;


}