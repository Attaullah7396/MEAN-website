
angular.module('app.signin', [])

  .controller("signInController",['$state','authService','UserService',signInController]);

  function signInController($state,authService,UserService)
  {
    var _self = this;

    _self.user = {
      email : "mateen@gmail.com",
      password : "123456"
    };



    _self.userLogin = function (data) {
        //  $state.go("country");
      authService.authentication(data.email,data.password).then(function(data){
        if(!authService.getdata.firstLogin)
        {
          console.log("Country Route");
          $state.go("country");
        }
        else
        {
          console.log(data);
          UserService.login_User();
          $state.go("menu.home",{uid:authService.getUid});
        }
      },function(err){

      });
    };
    

    _self.currentData = function()
    {
      console.log("Current Data : ",authService.getdata);
    }


  }



