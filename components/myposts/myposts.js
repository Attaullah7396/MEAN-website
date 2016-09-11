angular.module('app.myposts', [])
  .controller('MyPostsController', ['postService','authService','$scope', MyPostsController]);

function MyPostsController(postService,authService,$scope) {
  var _self = this;
  _self.userId = authService.getUid;
  _self.posts = postService.posts;
  _self.savedPostsArray = postService.savedPosts;
  _self.savedPostsKey = postService.savedPostsKey;
  _self.myProposalsArray = postService.myProposals;

  var firebaseRef = firebase.database().ref();
  var savePostRef = firebaseRef.child("savedposts/" + _self.userId);

  _self.UnSavePost = function(key){
    var pos = _self.savedPostsArray.indexOf(key);
    var postKey = _self.savedPostsKey[pos];
    savePostRef.child(postKey).remove(function (error) {
      if (error) {
        return error;
      } else {
        postService.savedPosts.splice(pos, 1);
        postService.savedPostsKey.splice(pos, 1);
        $scope.$apply();
      }
    });
  }

}
