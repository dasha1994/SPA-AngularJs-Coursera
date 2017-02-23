(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController($stateParams, items) {
  var itemDetail = this;
  console.log(items);
  itemDetail.items = items[$stateParams.itemId];
  /*itemDetail.name = item.name;
  itemDetail.short_name = item.short_name;
  itemDetail.description = item.description;*/
}

})();
