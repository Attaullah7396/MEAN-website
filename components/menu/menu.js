angular.module('app.menu', [])
  .controller('MenuController',['UserService','$state','$ionicPopover',MenuController])
   function MenuController (UserService,$state,$ionicPopover) {
    var _self = this;

$ionicPopover.fromTemplateUrl('templates/popover.html', {
    // scope: $scope,
  }).then(function(popover) {
    _self.popover = popover;
  });


_self.teachers =  UserService.searchProfiles;


  _self.logOut = function ()
  {
    firebase.auth().signOut().then(function() {
      localStorage.removeItem('userUid');
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  };

  _self.selected_profile_index = function(data)
  {
    console.log("Selected Profile index : ",data);
    $state.go('menu.otherProfile',{user: JSON.stringify(data)});
  };

  };
