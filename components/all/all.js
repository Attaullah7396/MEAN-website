angular.module('app.allList', [])
  .controller("AllController", ['listService',AllController]);

function AllController(listService) {
  var _self = this;

  _self.arr1 = listService.semiArray;
  _self.arr2 = listService.diodeArray;
  _self.arr3 = listService.connectorArray;
  
}



