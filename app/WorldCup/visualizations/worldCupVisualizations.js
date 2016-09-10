angular.module('careerAnalysisApp.worldCup.visualizations',[
        'ngRoute',
        'nvd3'
    ])


.controller('highestWorldCupRunsCtrl', function($scope){

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
                    axisLabel: 'Opposition'
                },
                yAxis: {
                    axisLabel: 'Dismissals per Innings',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Sachin Tendulkar" ,
                        "value" : 2278
                    } ,
                    {
                        "label" : "Ricky Ponting" ,
                        "value" : 1743
                    } ,
                    {
                        "label" : "Kumar Sangakkara" ,
                        "value" : 1532
                    }  ,
                    {
                        "label" : "Brain Lara" ,
                        "value" : 1225
                    }  ,
                    {
                        "label" : "AB De Villiers" ,
                        "value" : 1207
                    }   
                ]
            }
        ]
    })

.controller('50PlusWorldCupCtrl', function($scope){

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
                    axisLabel: 'Opposition'
                },
                yAxis: {
                    axisLabel: 'Dismissals per Innings',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Sachin Tendulkar" ,
                        "value" : 21
                    } ,
                    {
                        "label" : "Ricky Ponting" ,
                        "value" : 11
                    } ,
                    {
                        "label" : "Kumar Sangakkara" ,
                        "value" : 12
                    }  ,
                    {
                        "label" : "HH Gibbs" ,
                        "value" : 10
                    }  ,
                    {
                        "label" : "AB De Villiers" ,
                        "value" : 10
                    }   
                ]
            }
        ]
    })

.controller('centuriesWorldCupCtrl', function($scope){

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
                    axisLabel: 'Opposition'
                },
                yAxis: {
                    axisLabel: 'Dismissals per Innings',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Sachin Tendulkar" ,
                        "value" : 6
                    } ,
                    {
                        "label" : "Ricky Ponting" ,
                        "value" : 5
                    } ,
                    {
                        "label" : "Kumar Sangakkara" ,
                        "value" : 5
                    }   
                ]
            }
        ]
    })

.controller('battingAvgWorldCupCtrl', function($scope){

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
                    axisLabel: 'World Cups'
                },
                yAxis: {
                    axisLabel: 'Runs',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [
            {
                key: "Batting Average",
                values: [
                    {
                        "label" : "1996" ,
                        "value" : 74.14
                    } ,
                    {
                        "label" : "1999" ,
                        "value" : 18.83
                    } ,
                    {
                        "label" : "2003" ,
                        "value" : 61.18
                    } ,
                    {
                        "label" : "2007" ,
                        "value" : 21.66
                    }  ,
                    {
                        "label" : "2011" ,
                        "value" : 53.3
                    }    
                ]
            }
        ]
    })



;
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
//                 duration: 250
//             }
//         };
        

//     }])

// ;