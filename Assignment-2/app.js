(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  
  var showList = this;
  showList.items = ShoppingListCheckOffService.getItems();
  console.log(showList.items.length);
  showList.removeItem = function(item){
    ShoppingListCheckOffService.removeItem(item);
}

};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtList = this;
	boughtList.boughtItems =ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService(){
	var service = this;
	var items = [{ name: "1cookies", quantity: 10 },{ name: "2cookies", quantity: 11 },{ name: "4cookies", quantity: 12 },{ name: "5cookies", quantity: 13 }];
    var boughtItems = [];
	

	service.removeItem = function(item){
		console.log(item);
		boughtItems.push(item);
		console.log(boughtItems.size);
		var index = items.indexOf(item);
        items.splice(index,1);
	};

	service.getItems= function(){
		return items;
	};

	service.getBoughtItems= function(){
		return boughtItems;
	};
}
})();