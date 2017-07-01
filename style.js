
jQuery(document).ready(function($){
	
$(window).scroll(function() {
	
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
  
if ($(this).scrollTop() > 1){  
    $('.logo').addClass("logosticky");
  }
  else{
    $('.logo').removeClass("logosticky");
  }  
  
if ($(this).scrollTop() > 1){  
    $('.menu-btn').addClass("sticky");
  }
  else{
    $('.menu-btn').removeClass("sticky");
  }  
  
});

});









angular.module("app", []);
var app = angular.module("app");

app.controller("ctrl", function () {});

app.directive("offCanvasMenu", function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
            scope.isMenuOpen = false;
            scope.toggleMenu = function () {
                scope.isMenuOpen = !scope.isMenuOpen;
            };
        }
    };
});