

angular.module('app.message', [])
  .controller('messageController', function(messages_services) {

    var _self = this;
    _self.msgArray = messages_services.allMessages;
   


    _self.getAllMessagesList= function()
    {
      //  _self.allMessages = [{id:1,img:'img/mani.jpg',msgSenderName: 'Mani',msg: "I'm working on upwork."}] ;    
    };

    _self.sendMessage = function()
    {

    };




  });
