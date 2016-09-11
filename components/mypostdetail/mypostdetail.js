angular.module('app.mypostdetail', [])
  .controller('MyDetailController', ['$stateParams','postService', MyDetailController]);

function MyDetailController($stateParams,postService){
  var _self = this;

  _self.key = $stateParams.key;
  _self.name = $stateParams.name;
  _self.postsArray = postService.posts;
  _self.proposals = "";
  _self.trigger = false;

  var firebaseRef = firebase.database().ref();
  var proposalRef = firebaseRef.child('proposals/'+_self.key);

  proposalRef.on('value',function(snapshot){
    _self.proposals = snapshot.val();
    console.log(_self.proposals);
  })
}
