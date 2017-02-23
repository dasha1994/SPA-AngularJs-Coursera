(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
 .state('itemList', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/restaurant/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    },
   //  resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory(itemId);
      }]
   // }
  });

}

})();
