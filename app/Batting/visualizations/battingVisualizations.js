angular.module('careerAnalysisApp.batting.visualizations',[
        'ngRoute',
        'nvd3'
    ])


//Performance Visualization.

// .controller('performanceVisualizationCtrl', ['$scope','$http',function($scope,$http){

        
//         $http({
//           method: 'GET',
//           url: 'Batting/visualizations/performanceData.json'
//         }).then(function successCallback(response) {
//             $scope.data = response.data;
//           }, function errorCallback(response) {
//                 console.log('Failed');
//           })

//         $scope.options = {
//             chart: {
//                 type: 'sunburstChart',
//                 height: 450,
//                 color: d3.scale.category20c(),
//                 duration: 250,
//                 mode:"size",
//                 //showLabels:true,
//                 toolTip:{
//                     contentGenerator: function(d) {
//                         return d.displayName+' '+d.size;
//                     }
//                 }
//             }
//         };
        

//     }])

.controller('notOutController', ['$scope','$http',function($scope,$http){

        
        $http({
          method: 'GET',
          url: 'Batting/visualizations/sachinNotOut.json'
        }).then(function successCallback(response) {
            $scope.data = response.data;
          }, function errorCallback(response) {
                console.log('Failed');
          })

        $scope.options = {
            chart: {
                type: 'sunburstChart',
                groupColorByParent: false,
                height: 450,
                color: d3.scale.category20c(),
                duration: 250,
                mode:"size",
                //showLabels:true,
                tooltip:{
                    valueFormatter:function (d, i) {
                        return d+'%';
                    }
                }
            }
        };
        

    }])



.controller('manOfTheMatchVisualizationController', ['$scope','$http',function($scope,$http){


  $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Top Contenders'
                },
                yAxis: {
                    axisLabel: 'Man of the Match Awards',
                    axisLabelDistance: -10
                }
            }
        };

        $http({
          method: 'GET',
          url: 'Batting/visualizations/manOfTheMatchVisualization.json'
        }).then(function successCallback(response) {
            $scope.data = response.data[0];
            $scope.totalInnings = response.data[1].values["0"].value
          }, function errorCallback(response) {
                console.log('Failed');
          })








}])

.controller('battingInningsResultController', ['$scope','$http',function($scope,$http){


  $scope.options = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                duration: 500,
                stacked: false,
                xAxis: {
                    tickFormat: function(d){
                        return d;
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -20,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                }
            }
        };

        $http({
          method: 'GET',
          url: 'Batting/visualizations/battingInningsMatch.json'
        }).then(function successCallback(response) {
            $scope.data = response.data;
          }, function errorCallback(response) {
                console.log('Failed');
          })

}])

 .controller('centuryWinsController', function($scope){

        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = [
            {
                key: "Century Wins",
                y: 33
            },
            {
                key: "Century Losses",
                y: 16
            }
        ];
    })

.controller('contributionVisualization', ['$scope','$http',function($scope,$http) {
 $scope.options = {
            chart: {
                type: 'multiChart',
                height: 450,
                margin : {
                    top: 30,
                    right: 60,
                    bottom: 50,
                    left: 70
                },
                color: d3.scale.category10().range(),
                //useInteractiveGuideline: true,
                duration: 500,
                xAxis: {
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                yAxis1: {
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                },
                yAxis2: {
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                }
            }
        };

        $http({
          method: 'GET',
          url: 'Batting/visualizations/contributionPercentageData.json'
        }).then(function successCallback(response) {
            $scope.data = response.data;
          }, function errorCallback(response) {
                console.log('Failed');
          })
        
}])


;