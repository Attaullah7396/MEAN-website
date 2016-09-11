/**
 * Created by Mateen Bhai on 5/18/2016.
 */


angular.module('app.mobileNo', [])

  .controller("mobileNoController",['$state','$stateParams','authService',mobileNoController])

function mobileNoController($state,$stateParams,authService)
{
  var _self = this;
  _self.selectedCode = $stateParams.code;


  _self.next = function()
  {
          // $state.go("qualification");

    authService.getdata.countryCode = _self.selectedCode;
    authService.getdata.contactNo = _self.number;

    console.log("Data jsbdk : ",authService.getdata);
    if(authService.getdata.userType == "teacher")
    {
      $state.go("qualification");
    }
    else
    {
      $state.go("picture");
    }
  };

};

