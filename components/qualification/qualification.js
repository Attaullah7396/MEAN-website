/**
 * Created by Mateen Bhai on 5/19/2016.
 */


angular.module('app.qualification', [])

  .controller("qualificationController",['$filter','$state','authService','listService',qualificationController])

function qualificationController($filter,$state,authService,listService)
{
  var _self = this;

  _self.degree = listService.degree;
  _self.autoComplete = listService.subjects;

  _self.specilizedSubjects = [];


  _self.addSubjects = function(a) {

    _self.specilizedSubjects.push(a);
    _self.subjects = "";

  };


  _self.next = function()
  {
    authService.getdata.degree =  $filter('lowercase')(_self.selectedDegree);
    authService.getdata.specilizedSubjects = $filter('lowercase')(_self.specilizedSubjects);
    console.log("Next is call : ",authService.getdata);

    $state.go("picture");
  };

  _self.removeSubject = function(i)
  {
    console.log("Index : ",i);
    _self.specilizedSubjects.splice(i,1);
    console.log("Array : ",_self.specilizedSubjects);
  };

};
