angular.module('app.proposal', [])
  .controller("ProposalController", ['$stateParams','authService','postService','$state', ProposalController]);

function ProposalController($stateParams,authService,postService,$state) {

    var _self = this;
    _self.key = $stateParams.key;
  _self.postUid = $stateParams.uid;

    _self.proposeFunc = function(text){
      postService.proposalFunc(text, _self.key, _self.postUid).then(function (data) {
        _self.textData = "";
        $state.go("menu.home",{uid:_self.userId});
      }, function (error) {
        _self.textData = "";
        console.log('getting error', error)
      });
    };
  }

