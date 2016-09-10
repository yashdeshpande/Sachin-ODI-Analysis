'use strict';

angular.module('careerAnalysisApp.fielding', [
  'ngRoute',
  'ui.grid',
  'careerAnalysisApp.fielding.visualizations'
  ])

.controller('fieldingGridController', ['$scope', '$http','uiGridConstants', function ($scope, $http, uiGridConstants) {
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
      {field: 'Catches'},
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
 


  $http.get('/Fielding/fieldingGridData.json')
    .success(function(data) {
      $scope.gridOptions.data = data;

    });

    
}])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/fielding', {
//     templateUrl: 'Fielding/fielding.html',
//     controller: 'fieldingCtrl'
//   });
// }])

// .controller('fieldingCtrl', [function() {

// }])


// .controller('gridController', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
//   var today = new Date();
//   var nextWeek = new Date();
//   nextWeek.setDate(nextWeek.getDate() + 7);
 
//   $scope.gridOptions = {
//     enableFiltering: true,
//     onRegisterApi: function(gridApi){
//       $scope.gridApi = gridApi;
//     },
//     columnDefs: [
//       { field: 'name' },
//       { field: 'gender',
//         filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><div my-custom-dropdown></div></div>', 
//         filter: { 
//           term: 1,
//           options: [ {id: 1, value: 'male'}, {id: 2, value: 'female'}]     // custom attribute that goes with custom directive above 
//         }, 
//         cellFilter: 'mapGender' },                               
//       { field: 'company', enableFiltering: false },
//       { field: 'email', enableFiltering: false },
//       { field: 'phone', enableFiltering: false },
//       { field: 'age',
//         filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><div my-custom-modal></div></div>'
//       },
//       { field: 'mixedDate', cellFilter: 'date', width: '15%', enableFiltering: false }
//     ]
//   };
 
//   $scope.totalRuns = 5678;
//   $scope.runRate = 50.67;
//   $scope.centuries = 4;
//   $scope.ducks = 8;
//   $scope.notOuts = 4;
//   $scope.totalMatches = 500;
  

//   $http.get('/data/500_complex.json')
//     .success(function(data) {
//       $scope.gridOptions.data = data;
//       $scope.gridOptions.data[0].age = -5;
 
//       data.forEach( function addDates( row, index ){
//         row.mixedDate = new Date();
//         row.mixedDate.setDate(today.getDate() + ( index % 14 ) );
//         row.gender = row.gender==='male' ? '1' : '2';
//       });
//     });

    
// }])
 
// .filter('mapGender', function() {
//   var genderHash = {
//     1: 'male',
//     2: 'female'
//   };
 
//   return function(input) {
//     if (!input){
//       return '';
//     } else {
//       return genderHash[input];
//     }
//   };
// })
 
// .directive('myCustomDropdown', function() {
//   return {
//     template: '<select class="form-control" ng-model="colFilter.term" ng-options="option.id as option.value for option in colFilter.options"></select>'
//   };
// })
 
// .controller('myCustomModalCtrl', function( $scope, $compile, $timeout ) {
//   var $elm;
  
//   $scope.showAgeModal = function() {
//     $scope.listOfAges = [];
    
//     $scope.col.grid.appScope.gridOptions.data.forEach( function ( row ) {
//       if ( $scope.listOfAges.indexOf( row.age ) === -1 ) {
//         $scope.listOfAges.push( row.age );
//       }
//     });
//     $scope.listOfAges.sort();
    
//     $scope.gridOptions = { 
//       data: [],
//       enableColumnMenus: false,
//       onRegisterApi: function( gridApi) {
//         $scope.gridApi = gridApi;
        
//         if ( $scope.colFilter && $scope.colFilter.listTerm ){
//           $timeout(function() {
//             $scope.colFilter.listTerm.forEach( function( age ) {
//               var entities = $scope.gridOptions.data.filter( function( row ) {
//                 return row.age === age;
//               }); 
              
//               if( entities.length > 0 ) {
//                 $scope.gridApi.selection.selectRow(entities[0]);
//               }
//             });
//           });
//         }
//       } 
//     };
    
//     $scope.listOfAges.forEach(function( age ) {
//       $scope.gridOptions.data.push({age: age});
//     });
    
//     var html = '<div class="modal" ng-style="{display: \'block\'}"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">Filter Ages</div><div class="modal-body"><div id="grid1" ui-grid="gridOptions" ui-grid-selection class="modalGrid"></div></div><div class="modal-footer"><button id="buttonClose" class="btn btn-primary" ng-click="close()">Filter</button></div></div></div></div>';
//     $elm = angular.element(html);
//     angular.element(document.body).prepend($elm);
 
//     $compile($elm)($scope);
    
//   };
  
//   $scope.close = function() {
//     var ages = $scope.gridApi.selection.getSelectedRows();
//     $scope.colFilter.listTerm = [];
    
//     ages.forEach( function( age ) {
//       $scope.colFilter.listTerm.push( age.age );
//     });
    
//     $scope.colFilter.term = $scope.colFilter.listTerm.join(', ');
//     $scope.colFilter.condition = new RegExp($scope.colFilter.listTerm.join('|'));
    
//     if ($elm) {
//       $elm.remove();
//     }
//   };
// })
 
 
// .directive('myCustomModal', function() {
//   return {
//     template: '<label>{{colFilter.term}}</label><button ng-click="showAgeModal()">...</button>',
//     controller: 'myCustomModalCtrl'
//   };
// })


;

