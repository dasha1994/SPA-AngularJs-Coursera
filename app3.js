(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry"; 
  $scope.cookieCost = .45;

$scope.feedYaakov = function(){
	$scope.stateOfBeing = "fed"
};

$scope.sayLovesMessage = function(){
	var msg = "Yaakov likes to eat healthy snacks at night!";
	//var output = $filter('uppercase')(msg);
	msg = lovesFilter(msg);
	return msg;
};



$scope.displayNumeric = function(){
	var totalNameValue = calculateNumericForString($scope.name);
	$scope.totalValue = totalNameValue;
};

function calculateNumericForString(string){
  var totalStringValue = 0;
	for(var i = 0;i<string.length; i++){
 		totalStringValue += string.charCodeAt(i);
	}
	return totalStringValue;
}
};
function LovesFilter(){
	return function(input){
		input = input || "";
		input = input.replace("likes","loves");
		return input;
	}
}

function TruthFilter(){
	return function(input,target,replace){
		input = input || "";
		input = input.replace(target,replace);
		return input;
	}
}


})();