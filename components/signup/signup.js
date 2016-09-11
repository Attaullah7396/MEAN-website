angular.module('app.signup', [])
  .controller('SignUpController', function ($state,$stateParams,generalService) {
    var self = this;
    self.user = {
      gender: ''};
    self.userType = $stateParams.usertype;
    
    self.genders = function (gender) {
      self.user.gender = gender;
    }
    self.createProfile = function (data) {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).catch(function(error) {
        //generalService.toastMessage(error,'long','bottom');
        console.log("Error in Signup : ",error);
      }).then(function(success)
      {
          console.log("Data After Signup Value : ",success.uid);
          firebase.database().ref('users/' + success.uid).set({
            name: data.firstName +" "+data.lastName,
            userType: self.userType,
            gender: data.gender,
            firstLogin:false,
            status : true
          });
         // generalService.toastMessage('Account created','short','bottom');
        //$state.go('signin');

      });
    };


  });

