(function () {
'use strict';

angular.module('data')
.component('itemList', {
  templateUrl: 'src/restaurant/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
