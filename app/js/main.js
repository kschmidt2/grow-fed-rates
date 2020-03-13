// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function() {

        let chartId = document.getElementById("chart-container");

        // checks for the chart ID and displays a backup image if the browser can't find it
        if (!chartId) {
            console.log('noId');
            let chartArea = document.getElementsByClassName("chart-area");
            for(var i = 0; i < chartArea.length; i++) {
                chartArea[i].style.display = "none";
            } 
            // insert chart screenshot here
            document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
        } else {
            console.log('yesId')
        }


        const myChart =  

            Highcharts.chart(chartId, {
                chart: {
                    type: 'arearange',
                    styledMode: true,
                    spacingBottom: 25,
                    spacingRight: 100
                }, 
                title: {
                    text: null
                },
                data: {
                    googleSpreadsheetKey: '19gPNciBoaDoDN3R5Ws2SQxBfrVL2jGk486llItuIvCE',
                    googleSpreadsheetWorksheet: 2
                },
                plotOptions: {
                    series: {
                        lineWidth: 1,
                        // clip: false,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            fillColor: '#ffffff',
                            states: {
                                hover: {
                                    fillColor: '#ffffff'
                                }
                            }
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            whiteSpace: 'nowrap'
                        }
                    },
                    tickLength: 5
                },
                yAxis: {
                    title: false,
                    labels: {
                        useHTML: true,
                        overflow: 'allow',
                        format: '{value:.1f}'
                    },
                    min: 0,
                    max: 2.5
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    shadow: false,
                    padding: 10,
                    pointFormat: '{point.low}% - {point.high}%</b>'
                },
                responsive: {
                    rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                        spacingRight: 10
                        },
                        legend: {
                            align: 'left',
                            x: -18
                        },
                        tooltip: {
                            enabled: false
                        }
                    }
                    }]
                }
            });
        },1000);
    });