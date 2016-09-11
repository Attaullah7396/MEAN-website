
angular.module('app.picture', [])
  .controller("profilePicController",['authService','$cordovaCamera','$cordovaImagePicker','$cordovaFile','$ionicActionSheet','$state',profilePicController])

function profilePicController(authService,$cordovaCamera,$cordovaImagePicker,$cordovaFile,$ionicActionSheet, $state)
{
  var _self = this;
  _self.defaultPicPath = "img/defaultpic.png";
  var dpPic1;
  var dpPic2;
  var finalPic;
  var blob;
  
  /**
   * 
   * Add picture button clicked
   * 
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

  _self.uplaodToDrive = function()
  {
    var options = {
      maximumImagesCount: 1
    };
    
    $cordovaImagePicker.getPictures(options)
      .then(function (results) {
        for (var i = 0; i < results.length; i++) {
          console.log("selected Image from Drive",results[i]);
          _self.selectedImg = results[i];

          dpPic1 = _self.selectedImg.substring(0, _self.selectedImg.lastIndexOf('/') + 1),
        dpPic2 = _self.selectedImg.substring(_self.selectedImg.lastIndexOf('/') + 1, _self.selectedImg.length),
        finalPic = new Date().valueOf() + dpPic2;

          console.log("PIC 1 ",dpPic1);
                    console.log("PIC 2 ",dpPic2);
                              console.log("Final Pic ",finalPic);
        }
      }, function(error) {
        console.log("Error : ",error);
      });
  };

  

  _self.capture = function()
  {

    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
      _self.selectedImg = imageURI;
      console.log("Pic from capture",_self.selectedImg);

        dpPic1 = imageURI.substring(0, imageURI.lastIndexOf('/') + 1),
        dpPic2 = imageURI.substring(imageURI.lastIndexOf('/') + 1, imageURI.length),
        finalPic = new Date().valueOf() + dpPic2;

          console.log("PIC 1 ",dpPic1);
                    console.log("PIC 2 ",dpPic2);
                              console.log("Final Pic ",finalPic);
    }, function(err) {
      console.log("Error : ",err);
    });
  };

var storageRef = firebase.storage().ref();

  _self.saveDetails = function(a,b)
  {
  
//  $state.go("menu.home",{uid:'aNWsgi7AYwZ6PxG5dWwHyfCOeng1'});        

      $cordovaFile.readAsArrayBuffer(dpPic1, dpPic2)
        .then(function (success) {
           blob = new Blob([success], {type: 'image/jpeg'});
           var uploadTask = storageRef.child('users/profilepic/' + firebase.auth().currentUser).put(blob);
            uploadTask.on('state_changed', function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                console.log("Snapshot : ",snapshot);
                console.log("Current User : ",firebase.auth().currentUser.uid);
            }, function(error) {
                console.log("Error in uploading",error);
            }, function() {

                var downloadURL = uploadTask.snapshot.downloadURL;
                authService.getdata.pic = downloadURL
                authService.updateInfo();
                console.log("File upload successfully: ",downloadURL);
            });


        }, function (error) {
            console.error(error);
        });

  };

};
