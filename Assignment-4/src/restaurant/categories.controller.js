(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var categoriesList = this;
  console.log(items);
  categoriesList.items = items;
}

})();
