angular.module('app.viewsemi', [])
    .controller("ViewSemiController", ['$stateParams','listService',ViewSemiController]);

function ViewSemiController($stateParams,listService) {
  var _self = this;

  _self.index = $stateParams.index;
  _self.semiArray = listService.semiArray;
  _self.semiObj = _self.semiArray[_self.index];


}