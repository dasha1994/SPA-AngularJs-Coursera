(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;

  service.user = {
    lastname : "",
    firstname : "",
    email : "",
    phone : "",
     menuitem : {
      short_name:"",
      name:"",
      description:""
     }
  };

  service.getUser = function () {
    console.log(service.user);
    if(!service.user.lastname){
      return null;
    }else
      return service.user;
    
  };
  service.setUser = function (data) {
       console.log(data);
       service.user.lastname = data.lastname;
       service.user.firstname = data.firstname;
       service.user.email = data.email;
       service.user.phone = data.phone;
       service.user.menuitem.name = data.menuitem.name;
       service.user.menuitem.description = data.menuitem.description;
       service.user.menuitem.short_name = data.menuitem.short_name;
  };

  

}



})();
