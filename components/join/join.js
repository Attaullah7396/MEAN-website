

angular.module('app.join',[])
  .controller('joinController',function($state){
    var self = this;
    self.user = {};
    self.next = function(gender){
        self.user.choice = gender
        $state.go('signup',{usertype: self.user.choice})
    }
  });
