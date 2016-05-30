
var module = angular.module('PickerTest', ['colorpicker.module'])

module.controller('Main',['$scope','$document','$timeout',function($scope,$document,$timeout){

	var c = document.getElementById("canvas");
	var img = new Image();
	img.crossOrigin = "Anonymous";
	img.onload = function(){
	  c.getContext("2d").drawImage(img,0,0);
	};
	img.src = 'http://i.imgur.com/yf6d9SX.jpg';
	
	var eyedropperClass = "eyedropper-cursor";
	$scope.colour = null;
	
	$scope.$on("colorpicker-selected",function(event,data){
		console.log("colorpicker-selected data",data)
	})
	
	$scope.$on("colorpicker-probe-started",function(event,data){
		event.stopPropagation();
		$document.find("body").addClass(eyedropperClass);
		data.elm.addClass(eyedropperClass);

		$timeout(function(){
		data.elm[0].style.display = "none"
		})
		$timeout(function(){

		data.elm[0].style.display='';
		})
		
		//data.elm[0].style.background.color = null;
		console.log(data.elm)
		data.elm.triggerHandler("onmove")
		console.log("colorpicker-probe-started data",data)
	})
	$scope.$on("colorpicker-probe-finished",function(event,data){
		$document.find("body").removeClass(eyedropperClass);
		data.elm.removeClass(eyedropperClass);
		console.log("colorpicker-probe-finished data",data)
	})
	$scope.$on("colorpicker-probe-supported",function(event,data){
		console.log("colorpicker-probe-supported data",data)
	})
	$scope.$on("colorpicker-probe-unsupported",function(event,data){
		
		console.log("colorpicker-probe-unsupported data",data)
	})
}]);