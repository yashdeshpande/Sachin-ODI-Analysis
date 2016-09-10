angular.module('careerAnalysisApp.fielding.visualizations',[
        'ngRoute',
        'nvd3'
    ])

.controller('dismissalPerInningsCtrl', function($scope){

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
                        "label" : "v Australia" ,
                        "value" : 0.436
                    } ,
                    {
                        "label" : "v Pakistan" ,
                        "value" : 0.420
                    } ,
                    {
                        "label" : "v Bangladesh" ,
                        "value" : 0.116
                    }  ,
                    {
                        "label" : "v England" ,
                        "value" : 0.405
                    }  ,
                    {
                        "label" : "v Kenya" ,
                        "value" : 0.200
                    }  ,
                    {
                        "label" : "v New Zealand" ,
                        "value" : 0.175
                    }  ,
                    {
                        "label" : "v South Africa" ,
                        "value" : 0.210
                    }  ,
                    {
                        "label" : "v Sri Lanka" ,
                        "value" : 0.375
                    }  ,
                    {
                        "label" : "v U.A.E" ,
                        "value" : 0.500
                    } ,
                    {
                        "label" : "v West Indies" ,
                        "value" : 0.157
                    }  ,
                    {
                        "label" : "v Zimbabwe" ,
                        "value" : 0.147
                    }    
                ]
            }
        ]
    });