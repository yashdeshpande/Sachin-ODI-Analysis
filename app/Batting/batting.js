'use strict';

angular.module('careerAnalysisApp.batting', [
  'ngRoute',
  'ui.grid',
  'careerAnalysisApp.batting.visualizations'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/batting', {
    templateUrl: 'batting/batting.html',
    controller: 'battingCtrl'
  });
}])

.controller('battingCtrl', [function() {

}])


.controller('battingGridController', ['$scope', '$http','uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.gridOptions = {
    
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
      
      // $scope.gridApi.core.on.rowsVisibleChanged($scope,function(){
      //   setTimeout(function(){$scope.currentData = $scope.gridApi.core.getVisibleRows($scope.gridApi.grid);
      //                   console.log($scope.currentData);
      //                   $scope.totalRuns();
      //                   $scope.runRateCalculate();
      //                   $scope.centuriesCalculate();
      //                   $scope.ducksCalculate();
      //                   $scope.notOutsCalculate();
      //                   $scope.totalMatchesCalculate();
      //           },200)




      // });
      // $scope.gridApi.core.on.rowsVisibleChanged($scope, function() {
    
    
      
      // //var entities = _.map(filtered, 'entity'); // Entities extracted from the GridRow array
      // console.log($scope.currentData);
      // // console.log($scope.totalRuns)
      // $scope.totalRuns();


      // });

    },
    enableFiltering: true,
    columnDefs: [
      {field: 'Batting score'},
      {field: 'Innings'},
      {field: 'Out'},
      {field: 'Total Score'},
      {field: 'Opposition'},
      {field: 'Ground'},
      {field: 'Date'},
      {field: 'Match Result'},
      {field: 'Result Margin'},
      {field: 'Result Margin Type'}



      // { field: 'name' },
      // { field: 'gender',
      //   filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><div my-custom-dropdown></div></div>', 
      //   filter: { 
      //     term: 1,
      //     options: [ {id: 1, value: 'male'}, {id: 2, value: 'female'}]     // custom attribute that goes with custom directive above 
      //   }, 
      //   cellFilter: 'mapGender' },                               
      // { field: 'company', enableFiltering: true },
      // { field: 'email', enableFiltering: true },
      // { field: 'phone', enableFiltering: true },
      // { field: 'age',
      //   filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><div my-custom-modal></div></div>'
      // },
      // { field: 'mixedDate', cellFilter: 'date', width: '15%', enableFiltering: true }
    ]
  };

      // $scope.totalRuns = function(){
      //     $scope.total=0;
      //     //console.log($scope.currentData);
      //     for (var i = 0; i < $scope.currentData.length; i++) {
      //       if($scope.currentData[i].entity["Batting score"]!=='TDNB' && $scope.currentData[i].entity["Batting score"]!=='DNB'){
      //       $scope.total+=parseInt($scope.currentData[i].entity["Batting score"]);
      //       }
      //       //console.log($scope.currentData[i].entity["Batting score"]);
      //     }
      // };


      // $scope.runRateCalculate=function(){
      //   $scope.inningsCount = 0;
      //   for(var i=0;i<$scope.currentData.length;i++){
      //     if($scope.currentData[i].entity["Batting score"]!=='TDNB' && $scope.currentData[i].entity["Batting score"]!=='DNB'){
      //       $scope.inningsCount++;
      //     }
      //   }
      //   $scope.runRate=$scope.total/$scope.inningsCount;
      // };
      // $scope.centuriesCalculate = function(){
      //   $scope.centuries = 0;
      //   for (var i = 0; i < $scope.currentData.length; i++) {
      //       if(parseInt($scope.currentData[i].entity["Batting score"])>100);
      //       $scope.centuries++;
      //     }
      // };
      // $scope.ducksCalculate = function(){
      //   $scope.ducks = 0;
      //   for (var i = 0; i < $scope.currentData.length; i++) {
      //       if(parseInt($scope.currentData[i].entity["Batting score"])===0);
      //       $scope.ducks++;
      //     }
      // };
      // $scope.notOutsCalculate = function(){
      //   $scope.notOuts = 0;
      //   for (var i = 0; i < $scope.currentData.length; i++) {
      //       if(parseInt($scope.currentData[i].entity["Out"])===true);
      //       $scope.notOuts++;
      //     }
      // };
      // $scope.totalMatchesCalculate = function(){
      //   $scope.totalMatches = 0;
      //   return $scope.currentData.length
      // };

      // $scope.centuries = 49;
      // $scope.ducks = 8;
      // $scope.notOuts = 4;
      // $scope.totalMatches = 500;
 


  $http.get('/Batting/battingGridData.json')
    .success(function(data) {
      $scope.gridOptions.data = data;

    });

    
}])
 
// 
 
 
.controller('myCustomModalCtrl', function( $scope, $compile, $timeout ) {
  var $elm;
  
  $scope.close = function() {
    var ages = $scope.gridApi.selection.getSelectedRows();
    $scope.colFilter.listTerm = [];
    
    ages.forEach( function( age ) {
      $scope.colFilter.listTerm.push( age.age );
    });
    
    $scope.colFilter.term = $scope.colFilter.listTerm.join(', ');
    $scope.colFilter.condition = new RegExp($scope.colFilter.listTerm.join('|'));
    
    if ($elm) {
      $elm.remove();
    }
  };
})
 
 
.directive('myCustomModal', function() {
  return {
    template: '<label>{{colFilter.term}}</label><button ng-click="showAgeModal()">...</button>',
    controller: 'myCustomModalCtrl'
  };
})



;

