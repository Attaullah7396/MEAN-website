

angular.module('app.otherProfile',[])

  .controller('OtherProfileController', ['$state','$stateParams','UserService','messages_services',OtherProfileController])
  function OtherProfileController ($state, $stateParams,UserService,messages_services)
  {
    var _self = this;
    _self.profile = JSON.parse($stateParams.user);




    _self.sendMessage = function(sendToID)
    {
        // console.log("Send To ID : ",sendToID);
        // console.log("Current UID : ",firebase.auth().currentUser.uid);
        // var id = firebase.auth().currentUser.uid;
        // messages_services.getallMessangerList(id);


        messages_services.checkingMessangerList(sendToID);


    };

    _self.fetchMessangerList = function()
    {
        console.log("All Messanger List : ",messages_services.MessangerList);
    };

   
  };
