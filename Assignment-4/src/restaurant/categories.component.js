(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/restaurant/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
