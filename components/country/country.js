



angular.module('app.country', [])
  .controller('CountryController', function($stateParams,$state,authService,listService) {
    var _self = this;
    _self.id = $stateParams.id;

    _self.countries = listService.countries;

    _self.next = function(code)
    {
      authService.getdata.country = _self.slectedCountry;
      authService.getdata.city = _self.selectedCity;
      $state.go("mobileNo",{code:code});

      //console.log("AAA : ",authService.getdata);
    };

    _self.setCity = function()
    {
      //console.log("Call function : ",_self.selectedCity);
      _self.selectedCity = null;
    }

  });
