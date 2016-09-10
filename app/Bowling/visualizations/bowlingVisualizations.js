angular.module('careerAnalysisApp.bowling.visualizations',[
        'ngRoute',
        'nvd3'
    ])

.controller('wicketGrowthCtrl', ['$scope','$http', function($scope,$http){
        $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Years'
                },
                yAxis: {
                    axisLabel: 'Wickets',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            }
        };

    //     $http({
    //       method: 'GET',
    //       url: 'Bowling/visualizations/wicketsYoY.json'
    //     }).then(function successCallback(response) {
    //         $scope.data = JSON.stringify(response.data);
    //       }, function errorCallback(response) {
    //             console.log('Failed');
    //       })
    // }])
        $scope.data = [
    {
        area: true,
        values: [
            {
                x: 1990,
                y: 2
            },
            {
                x: 1991,
                y: 6
            },
            {
                x: 1992,
                y: 4
            },
            {
                x: 1993,
                y: 4
            },
            {
                x: 1994,
                y: 14
            },
            {
                x: 1995,
                y: 4
            },
            {
                x: 1996,
                y: 9
            },
            {
                x: 1997,
                y: 6
            },
            {
                x: 1998,
                y: 24
            },
            {
                x: 1999,
                y: 5
            },
            {
                x: 2000,
                y: 20
            },
            {
                x: 2001,
                y: 5
            },
            {
                x: 2002,
                y: 6
            },
            {
                x: 2003,
                y: 3
            },
            {
                x: 2004,
                y: 19
            },
            {
                x: 2005,
                y: 8
            },
            {
                x: 2006,
                y: 3
            },
            {
                x: 2007,
                y: 11
            }],      //values - represents the array of {x,y} data points
        key: "Wickets Yoy", //key  - the name of the series.
        color: "#ff7f0e"  //color - optional: choose your own line color.
    }
]

}])

.controller('fivePlusWicketCtrl', function($scope){

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
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: '5 wicket Performances'
                },
                yAxis: {
                    axisLabel: 'Runs Conceded',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "v Pakistan @ Kochi,2003" ,
                        "value" : 50
                    } ,
                    {
                        "label" : "v Australia @ Kochi,1998" ,
                        "value" : 32
                    } 
                ]
            }
        ]
    })
;