'use strict';

var careerAnalysisApp =angular.module('careerAnalysisApp', [
  'ngRoute',
  'duScroll',
  'careerAnalysisApp.batting',
  'careerAnalysisApp.bowling',
  'careerAnalysisApp.fielding',
  'careerAnalysisApp.worldCup',
  'careerAnalysisApp.version',
  'ui.grid',
  'nvd3'

])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('analysisPanelController', ['$scope','$document',function($scope,$document){
	$scope.views =
    [
    	{ name: 'Batting', url: 'Batting/batting.html'},
    	{ name: 'Bowling', url: 'Bowling/bowling.html'},
    	{ name: 'Fielding', url: 'Fielding/fielding.html'},
    	{ name: 'World Cup', url: 'WorldCup/worldCup.html'}
    ];
  		$scope.activeView= $scope.views[0];
      var analysisPanelById = angular.element(document.getElementById('navigationPanel'));
      $scope.toAnalysisPanel = function() {
          $document.scrollToElementAnimated(analysisPanelById,0);
        }
      

}])
.directive('setClassWhenAtTop', function ($window) {var $win = angular.element($window);

    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var topClass = attrs.setClassWhenAtTop,
                topPadding = parseInt(attrs.paddingWhenAtTop, 10),
                parent = element.parent(),
                offsetTop;

            $win.on("scroll", function () {
                offsetTop = parent.offset().top - topPadding;
                if ($win.scrollTop() >= offsetTop) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                    parent.css("height", null);
                }
            });
        }
    };});


