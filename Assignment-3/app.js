(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
   };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

	var list = this;
    list.searchTerm = "";
	list.getMatchedMenuItems = function(){
	var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
	promise.then(function (response){
         list.found = response;
	});
}
	console.log('searchTerm');
    list.removeItem = function (itemIndex) {
     list.found.splice(itemIndex,1);
    
  };
};
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http,ApiBasePath){
	var service = this;
	
	service.getMatchedMenuItems = function(searchTerm){
         return $http({
         	method: "GET",
      		url: (ApiBasePath + "/menu_items.json")
    	     
         }).then(function (result) {
    
   var foundItems = [];
    for(var i = 0; i<result.data.menu_items.length;i++){
        if(result.data.menu_items[i].description.indexOf(searchTerm)!=-1){
        	foundItems.push(result.data.menu_items[i]);
        }
    }

    console.log(foundItems);
    return foundItems;
});   
   
	}
}

})();