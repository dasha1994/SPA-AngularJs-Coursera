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
      onRemove: '&',
      message: '@message'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
   };

  return ddo;
}


function FoundItemsDirectiveController(){
	var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

	var list = this;
    list.searchTerm = "";
    
    list.found = [];
	list.getMatchedMenuItems = function(){
	 if(!list.searchTerm.length){
       list.message = 'SearchTerm is empty';
    }else{
    	list.message = "";
	var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
	promise.then(function (response){
	     list.found = response;
	     if(list.found.length===0){
	     	list.message = "Nothing found!"
	     }
	});
}
}
    list.removeItem = function (itemIndex) {
       list.searchTerm = "";
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
    if(foundItems.length==0){
    	
    }
    return foundItems;
});   
   
	}
}

})();