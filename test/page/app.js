
var module = angular.module('PickerTest', ['colorpicker.module'])

module.controller('Main',['$scope','$document','$timeout',function($scope,$document,$timeout){

	var c = document.getElementById("canvas");
	var img = new Image();
	img.crossOrigin = "Anonymous";
	img.onload = function(){
	  c.getContext("2d").drawImage(img,0,0);
	};
	img.src = 'http://i.imgur.com/yf6d9SX.jpg';
	
	var eyedropperBanClass = "eyedropper-cursor-ban";
	$scope.colour = null;
	
	$scope.$on("colorpicker-selected",function(event,data){
		console.log("colorpicker-selected data",data)
	})
	
	$scope.$on("colorpicker-probe-move",function(event,data){
		console.log("colorpicker-probe-move data",data);
	})

}]);