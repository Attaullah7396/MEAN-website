/**
 * Created by Attaullah on 5/24/2016.
 */

angular.module('app.search', [])

  .controller("SearchController",['$state', 'UserService',SearchController]);

function SearchController($state,UserService)
{
  var _self = this;

  _self.call = function(userId) {
    $state.go('menu.otherProfile', {userId: userId})

  };

setTimeout(function(){
  _self.teachers = UserService.storeUser;

},2000)

}
