(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  
    service.getMenuItem = function (shortname) {
    var config = {};
    if (shortname) {
      config.params = {'shortname': shortname};
    }

    return $http.get(ApiPath + 'menu_items/'+shortname+'.json').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response.data);
    return response.data;
  });
  };
}



})();
