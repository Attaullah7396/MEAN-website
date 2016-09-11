angular.module('app.default', [])
  .controller('defaultController', function($stateParams,$state) {
    var self = this;
    self.id = $stateParams.id;

   
  });
