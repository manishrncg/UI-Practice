/******Graph*******/

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area',
            plotBorderWidth: 2,
            color: '#C5C5C5'
        },
           title: {
            text: ' '
        },
        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: 'Value'
            },
            labels: {
                formatter: function () {
                    return '₹' + this.value * 10/1000 + 'million'
                }
            }
        },
      
    plotOptions: {
            series: {
                pointStart: Date.UTC(2016, 0, 1),
                pointIntervalUnit: 'year',
                 marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,

            }
        }
    },
        series: [{
            name: 'Best',
            data: [0, 300, 600, 900, 1209, 1502, 1835, 2109, 2447, 2702, 3034, 3300, 3610, 4063, 4303, 4676, 4908, 5307, 5729, 6028, 6509, 6947, 7402, 7634, 8000],
            color: '#e3ffcc'
        }, {
            name: 'Average',
            data: [0, 163, 203, 276, 408, 547, 729, 828, 909, 1047, 1102, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500],
            color: '#26c023',
            lineWidth: 6,
             fillColor: {
                   fillColor: null
                }
        }, {
            name: 'Worst',
            data: [0, 155, 195, 267, 400, 539, 721, 820, 901, 1039, 1094, 1193, 1293, 1393, 1493, 1589, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500],
            color: '#e9d8a3'
        }]
    });
});

/******Donut1 Chart******/

$(function () {        
    $('#donut1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 150,
            height: 150,
        },
        title: {
            text: '<span class="title-donut">Equity: 20%</span><br><span class="title-donut">Debt: 80%</span>',
            align: 'center',
            
            verticalAlign: 'middle',
            y: 0
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            innerSize: '70%',
            data: [
                ['Equity', 20],
                ['Debt', 80],
               
                {
                    
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ], zones: [{
                value: 80,
                color: '#D2EE00'
            }, { 
                color: '#2A6ACD'
            }]            
        }]
    });
});

/*******Donut2 Chart*********/

$(function () {        
    $('#donut2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 150,
            height: 150
        },
        title: {
            text: '<span class="title-donut">Equity: 60%</span><br><span class="title-donut">Debt: 40%</span>',
            align: 'center',
            
            verticalAlign: 'middle',
            y: 0
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            innerSize: '70%',
            data: [
                ['Equity', 60],
                ['Debt', 40],
               
                {
                    
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ], zones: [{
                value: 60,
                color: '#D2EE00'
            }, { 
                color: '#2A6ACD'
            }]            
        }]
    });
});

/*******Donut3 Chart*********/

$(function () {        
    $('#donut3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 150,
            height: 150
        },
        title: {
            text: '<span class="title-donut">Equity:80%</span><br><span class="title-donut">Debt: 20%</span>',
            align: 'center',
            
            verticalAlign: 'middle',
            y: 0
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            innerSize: '70%',
            data: [
                ['Equity', 80],
                ['Debt', 20],
               
                {
                    
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ], zones: [{
                value: 80,
                color: '#2A6ACD'
            }, { 
                color: '#D2EE00'
            }]  
        }]
    });
});

/********menu background color******/
$('.open-drop').click(function(event) {
    var clickedElement = $(event.target);
    var boxElement = clickedElement.closest('.side');
    if(boxElement.hasClass('open')) {
        boxElement.removeClass('open')
    }
    else {
        boxElement.addClass('open')
    }

    var anElement = clickedElement.find('.arrow');
    if(anElement.hasClass('fa-chevron-left')) {
        anElement.removeClass('fa-chevron-left');
        anElement.addClass('fa-chevron-down');
    }
    else {
        anElement.addClass('fa-chevron-left');
        anElement.removeClass('fa-chevron-down');   
    }
    
    
});
