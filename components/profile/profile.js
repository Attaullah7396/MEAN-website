angular.module('app.profile', [])
  .controller("profileController",['authService','$ionicModal','$scope','listService','$filter','$ionicActionSheet',profileController])


    function profileController(authService,$ionicModal,$scope,listService,$filter,$ionicActionSheet)
    {

      var _self = this;
      _self.userProfile = authService.getdata;

      _self.countries = listService.countries;
      _self.degree = listService.degree;
      _self.subjectsList = listService.subjects;
      
      

      
     
     /**
      * 
      * Action sheet Code
      */
      _self.add = function(){
     $ionicActionSheet.show({
      titleText: 'Upload your Picture',
      buttons: [
        { text: '&nbsp; &nbsp;Upload From Camera' },
        { text: '&nbsp; &nbsp;Select From Drive' },
        // { text: '&nbsp; &nbsp; Cancel'},
      ],
      // destructiveText: 'Delete',
      cancelText: 'Cancel',
			
         cancel: function() {
            // add cancel code...
            return true;
         },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        if(index == 0){
          _self.capture();
        }
        else if(index ==1){
          _self.uplaodToDrive();
        }
        else{
          return true;
        }
        return true;
      },
      // destructiveButtonClicked: function() {
      //   console.log('DESTRUCT');
      //   return true;
      // }
    });
  }
  //===========================Completed ================================//
     

      $ionicModal.fromTemplateUrl('./components/profileEdit/profileEdit.html', {
        scope:$scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        console.log("Modal : ",modal);
        _self.modal = modal;
        console.log("Modal : ",_self.modal);
      });

      _self.statusChange = function(obj)
      {
        authService.updateDetails({available:obj})
      };


      _self.setCity = function()
      {
        //console.log("Call function : ",_self.selectedCity);
        _self.modalData.city = null;
      }

      _self.addSubjects = function(a) {
          _self.modalData.specilizedSubjects.push(a);
          _self.subjects = "";
      };


      _self.removeSubject = function(i)
      {
        console.log("Index : ",i);
        _self.modalData.specilizedSubjects.splice(i,1);
        console.log("Array : ",_self.modalData.specilizedSubjects);
      };


      _self.serviceData = function()
      {

        //console.log("Service : ",authService.getdata);
        console.log("_self.modalData : ",_self.modalData);
      };

      _self.open1 = function(data)
      {
        if(_self.userProfile.userType == 'teacher')
        {
          _self.modalData = angular.copy(authService.getdata);
          _self.modalData.degree = $filter('capitalize')(_self.modalData.degree);
          console.log("Fileter : ",_self.modalData.degree);
        }
        _self.modal.show();
      };

     /* $scope.openModal1 = function() {
        console.log("Open modal Call");
        $scope.modal.show();
      };
*/
      _self.closeModal2 = function() {
        console.log("Close modal Call");
        _self.modal.hide();
      };

      _self.saveChanges = function()
      {
        console.log("Daat after modification: ",_self.modalData);
        authService.updateDetails(_self.modalData).then(function(data)
        {
          _self.modal.hide();
          if(data)
          {
            console.log("All data updated Successfully");
          }
          else
          {
            console.log("Error in update : ",data);
          }
        });
      };


      var getProfileData =   function()
      {
        authService.profileUpdateEvent().then(function(data)
        {
          _self.userProfile = authService.getdata;
        });
      };
      getProfileData();

      _self.check = function()
      {
        console.log("_self value",_self.userProfile);
        console.log("Service Data",authService.getdata);
      };


    };
