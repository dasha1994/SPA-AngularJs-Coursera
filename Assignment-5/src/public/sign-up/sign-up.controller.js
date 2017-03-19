(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService','MenuService'];
function SignUpController(UserService,MenuService) {
  var signCtrl = this;
  signCtrl.shortname = "";
  signCtrl.menuitemIsValid = false;
  signCtrl.user = {
  	 lastname : "",
     firstname : "",
     email : "",
     phone : "",
     menuitem : {
     	name:"",
     	description:""
     }
  };

 // signCtrl.menuitem = MenuService.getMenuItem(signCtrl.user.menuitem);
    
  signCtrl.setUser = function(){
  	   signCtrl.menuitem = MenuService.getMenuItem(signCtrl.shortname);
    	MenuService.getMenuItem(signCtrl.shortname).then(
  	function(data) {
  		signCtrl.menuitemIsValid = true;
  		signCtrl.user.menuitem.short_name = data.short_name;
  		signCtrl.user.menuitem.name = data.name;
  		signCtrl.user.menuitem.description = data.description;
  		UserService.setUser(signCtrl.user);
  		/*$ctrl.registration = {
		  	firstName: "",
		  	lastName: "",
		  	email: "",
		  	phone: "",
		  	menu: ""
		};
  		$ctrl.signupForm.$setPristine();
  		$ctrl.signupForm.$setUntouched();*/
  	},
  	function(error) {
  		//$ctrl.menuitemValid = false;
  		//$ctrl.isSuccess = false;
  		signCtrl.menuitemIsValid = false;
 
  		return false;
  	});
 //UserService.setUser(signCtrl.user);
  };
}

})();