angular.module('app.detail', [])
  .controller('DetailController', function($stateParams,$rootScope) {
    var self = this;
   self.index = $stateParams.index;
   self.id = $rootScope.posts[self.index].$id;

    self.comment = function(data){
      var newRef = new Firebase("https://gettutor.firebaseio.com/posts/" + self.id);
      newRef.child("comments").push({
        name  :   $rootScope.userName,
        text  :  data,
        uid   :   $rootScope.userID
      });
      self.commentData = "";
    }

  });

