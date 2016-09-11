angular.module('app.notify', [])
  .controller('NotifyController', ['postService', NotifyController]);

function NotifyController(postService) {
  var _self = this;

  _self.notifications = postService.notifyArray;



}
