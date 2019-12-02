// Chart.js Main page
$(document).ready(function () {
    let ctx = document.getElementById('myChart')
    if (ctx) {

    ctx = document.getElementById('myChart').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(100, 0, 500, 0);
    gradientStroke.addColorStop(0, '#3f89e8');
    gradientStroke.addColorStop(1, '#5ebafe');

    var gradientFill = ctx.createLinearGradient(0, 200, 0, 0);
    gradientFill.addColorStop(0, "rgba(115, 189, 245, 0)");
    gradientFill.addColorStop(1, "rgba(63, 137, 232, 1)");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["", "Year 1", "Year 2", "Year 3", ""],
            datasets: [{
                label: "Approx",
                borderColor: gradientStroke,
                pointBorderColor: '#fff',
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointBorderWidth: 5,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 1,
                pointRadius: 10,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 4,
                data: [20000, 23000, 32000, 35387, 40000],
                lineTension: 0
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#475871",
                        fontStyle: "500",
                        fontFamily: "AvenirNextCyr",
                        fontSize: 14,
                        beginAtZero: false,
                        min: 10000,
                        maxTicksLimit: 5,
                        padding: 20,
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        fontColor: "#475871",
                        fontStyle: "500",
                        fontFamily: "AvenirNextCyr",
                        fontSize: 14,
                        beginAtZero: false,
                        min: 10000,
                        maxTicksLimit: 5,
                        padding: 20,
                    }
                }]
            },
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#475871',
                titleAlign: 'center',
                titleFontFamily: "AvenirNextCyr",
                titleFontStyle: "500",
                titleFontSize: 14,
                bodyFontColor: '#1a273a',
                bodyFontSize: 18,
                bodyFontFamily: "AvenirNextCyr",
                bodyFontStyle: "700",
                displayColors: false,
                cornerRadius: 10,
                xPadding: 10,
                yPadding: 15,
                callbacks: {
                    title: function (tooltipItem, data) {
                        return 'Approx'
                    },
                    label: function (tooltipItem, data) {
                        var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        console.log(value)
                        return value;
                    }
                }
            }
        }
    });

    let lengthData = myChart.data.datasets[0].data.length;
    let radius = myChart.data.datasets[0].pointRadius;
    let radiusArray = [];
    for (let i = 0; i < lengthData; i++) {
        radiusArray.push(radius);
    }

    radiusArray[0] = 0;
    radiusArray[radiusArray.length - 1] = 0;

    myChart.data.datasets[0].pointRadius = radiusArray;
    myChart.update();
    }

});

// Chart.js Etabs page
$(document).ready(function () {
    let dataCanvas = $('canvas').data();
    let arrCanvas = [];
    for (key in dataCanvas) {
      arrCanvas.push(dataCanvas[key]);
    }
    arrCanvas.reverse();
    
    var etabs = document.getElementById('return__graph');
    if (etabs) {
        etabs = document.getElementById('return__graph').getContext("2d");
        etabs.canvas.style.backgroundColor = 'white';
        var gradientFill = etabs.createLinearGradient(0, 200, 0, 0);
        gradientFill.addColorStop(0, "rgba(115, 189, 245, 0)"); 
        gradientFill.addColorStop(1, "rgba(63, 137, 232, 1)");
    
        var myChart = new Chart(etabs, {
            type: 'line',
            data: {
                labels: ["Year 1", "Year 2", "Year 3"],
                datasets: [{
                    label: "Approx",
                    borderColor: 'rgb(253, 204, 96)',
                    pointBorderColor: '#fff',
                    pointBackgroundColor: 'rgb(253, 204, 96)',
                    pointHoverBackgroundColor: 'rgb(253, 204, 96)',
                    pointHoverBorderColor: 'rgb(253, 204, 96)',
                    pointBorderWidth: 5,
                    pointHoverRadius: 7,
                    pointHoverBorderWidth: 1,
                    pointRadius: 10,
                    fill: true,
                    backgroundColor: 'rgba(253, 204, 96, .3)',
                    borderWidth: 4,
                    data: arrCanvas,
                    lineTension: 0,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 60,
                        top: 54,
                        bottom: 54
                    }
                },
                tooltips: {
                    displayColors: false,
                    yAlign: 'bottom',
                    xAlign: 'center',
                    backgroundColor: 'rgba(252, 252, 252, 1)',
                    titleFontSize: 14,
                    caretPadding: 6,
                    bodyAlign: 'center',
                    bodyFontFamily: "AvenirNextCyr",
                    bodyFontStyle: "500",
                    bodyFontSize: 14,
                    cornerRadius: 10,
                    xPadding: 12,
                    yPadding: 7,
                    titleFontColor: '#475871',
                    titleAlign: 'center',
                    titleFontFamily: "AvenirNextCyr",
                    bodyFontColor: '#1a273a',
                    bodyFontSize: 18,
                    bodyFontStyle: 500,
                    callbacks: {
                        title: function(tooltipItem, data) {
                            console.log(data);
                            return 'Approx'
                        },
                        label: function(tooltipItem, data) {
                            myChart.data.datasets[tooltipItem.datasetIndex].backgroundColor;
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        
                            return `$ ${value}`;
    
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            beginAtZero: false,
                            fontSize: 16,
                            fontColor: '#475871',
                            fontFamily: 'AvenirNextCyr, sans-serif',
                            fontStyle: 500,
                            min: 10000,
                            maxTicksLimit: 5,
                            padding: 20,
                            callback: function(value, index, values) {
                                return `$ ${value}`
                            },
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false
                        }
    
                    }],
                    xAxes: [{
                        gridLines: {
                            zeroLineColor: "#d9e0e8",
                            display: true,
                        },
                        ticks: {
                            padding: 20,
                            fontSize: 16,
                            fontColor: '#475871',
                            fontFamily: 'AvenirNextCyr, sans-serif',
                            fontStyle: 500,
                        }
                    }]
                }
            }
        });
    }
});

// Gde to ewe 1 chart
$(document).ready(function() {
    let dataCanvas = $('#return__graph-2').data();
    let arrCanvas = [];
    for (key in dataCanvas) {
      arrCanvas.push(dataCanvas[key]);
    }
    arrCanvas.reverse();

    var etabs2 = document.getElementById('return__graph-2')
    if (etabs2) {
        etabs2 = document.getElementById('return__graph-2').getContext("2d");
        etabs2.canvas.style.backgroundColor = 'white';
        var myChart = new Chart(etabs2, {
            type: 'line',
            data: {
                labels: ["Year 1", "Year 2", "Year 3"],
                datasets: [{
                    label: "Approx",
                    borderColor: 'rgb(253, 204, 96)',
                    pointBorderColor: '#fff',
                    pointBackgroundColor: 'rgb(253, 204, 96)',
                    pointHoverBackgroundColor: 'rgb(253, 204, 96)',
                    pointHoverBorderColor: 'rgb(253, 204, 96)',
                    pointBorderWidth: 5,
                    pointHoverRadius: 7,
                    pointHoverBorderWidth: 1,
                    pointRadius: 10,
                    fill: true,
                    backgroundColor: 'rgba(253, 204, 96, .3)',
                    borderWidth: 4,
                    data: arrCanvas,
                    lineTension: 0,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 60,
                        top: 54,
                        bottom: 54
                    }
                },
                tooltips: {
                    displayColors: false,
                    yAlign: 'bottom',
                    xAlign: 'center',
                    backgroundColor: 'rgba(252, 252, 252, 1)',
                    titleFontSize: 14,
                    caretPadding: 6,
                    bodyAlign: 'center',
                    bodyFontFamily: "AvenirNextCyr",
                    bodyFontStyle: "500",
                    bodyFontSize: 14,
                    cornerRadius: 10,
                    xPadding: 12,
                    yPadding: 7,
                    titleFontColor: '#475871',
                    titleAlign: 'center',
                    titleFontFamily: "AvenirNextCyr",
                    bodyFontColor: '#1a273a',
                    bodyFontSize: 18,
                    bodyFontStyle: 500,
                    callbacks: {
                        title: function(tooltipItem, data) {
                            console.log(data);
                            return 'Approx'
                        },
                        label: function(tooltipItem, data) {
                            myChart.data.datasets[tooltipItem.datasetIndex].backgroundColor;
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        
                            return `$ ${value}`;

                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            beginAtZero: false,
                            fontSize: 16,
                            fontColor: '#475871',
                            fontFamily: 'AvenirNextCyr, sans-serif',
                            fontStyle: 500,
                            min: 10000,
                            maxTicksLimit: 5,
                            padding: 20,
                            callback: function(value, index, values) {
                                return `$ ${value}`
                            },
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false
                        }

                    }],
                    xAxes: [{
                        gridLines: {
                            zeroLineColor: "#d9e0e8",
                            display: true,
                        },
                        ticks: {
                            padding: 20,
                            fontSize: 16,
                            fontColor: '#475871',
                            fontFamily: 'AvenirNextCyr, sans-serif',
                            fontStyle: 500,
                        }
                    }]
                }
            }
        });
    }
});

// Chart.js Perfomance page. 2 canvas
$(document).ready(function() {
    var bar = document.getElementById('st');
    if (bar) {
        bar = document.getElementById('st').getContext('2d');
        let dataCanvas = $('#st').data();
        let arrCanvas = [];
        for (key in dataCanvas) {
            arrCanvas.push(dataCanvas[key]);
        }
        arrCanvas.reverse();
        console.log(arrCanvas)

        var myChart = new Chart(bar, {
            type: 'bar',
            data: {
                labels: ['', 'Year 1', ''],
                datasets: [{
                    label: '',
                    data: arrCanvas,
                    backgroundColor: [
                        '#4b9bf0',
                        '#9b57ee',
                        '#f2ba3f',
                    ],
                    borderColor: [
                        '#6fb3fa',
                        '#b67afe',
                        '#ffda88',
                    ],
                    borderWidth: 1,
                }],
            },
            options: {
                
                showAllTooltips: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            stepSize: 5,
                            fontColor: "#475871",
                            fontStyle: "500",
                            fontFamily: "AvenirNextCyr",
                            fontSize: 14,
                            callback: function(value, index, values) {
                                return `${value}%`
                            },
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                        fontColor: "#475871",
                        fontStyle: "500",
                        fontFamily: "AvenirNextCyr",
                        fontSize: 18,
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    displayColors: false,
                    yAlign: 'bottom',
                    xAlign: 'center',
                    backgroundColor: '#4b9bf0',
                    titleFontSize: 14,
                    caretPadding: 6,
                    bodyAlign: 'center',
                    bodyFontFamily: "AvenirNextCyr",
                    bodyFontStyle: "500",
                    bodyFontSize: 14,
                    cornerRadius: 15,
                    xPadding: 12,
                    yPadding: 7,
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return ''
                        },
                        label: function(tooltipItem, data) {
                            myChart.data.datasets[tooltipItem.datasetIndex].backgroundColor;
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        
                            return `${value}%`;

                        },
                        labelColor: function(tooltipItem, data) {
                            let color = myChart.data.datasets[tooltipItem.datasetIndex].backgroundColor;
                            let colorLable = color[tooltipItem.index + 1];
                            myChart.options.tooltips.backgroundColor = colorLable;
                        
                            return myChart.options.tooltips.backgroundColor;
                        }
                    }
                },
            }
        });

        // Plugin for always show tooltips
        Chart.pluginService.register({
            beforeRender: function(chart) {
                if (chart.config.options.showAllTooltips) {
                    // create an array of tooltips
                    // we can't use the chart tooltip because there is only one tooltip per chart
                    chart.pluginTooltips = [];
                    chart.config.data.datasets.forEach(function(dataset, i) {
                        chart.getDatasetMeta(i).data.forEach(function(sector, j) {
                            chart.pluginTooltips.push(new Chart.Tooltip({
                                _chart: chart.chart,
                                _chartInstance: chart,
                                _data: chart.data,
                                _options: chart.options.tooltips,
                                _active: [sector]
                            }, chart));
                        });
                    });

                    // turn off normal tooltips
                    chart.options.tooltips.enabled = false;
                }
            },
            afterDraw: function(chart, easing) {
                if (chart.config.options.showAllTooltips) {
                    // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
                    if (!chart.allTooltipsOnce) {
                        if (easing !== 1)
                            return;
                        chart.allTooltipsOnce = true;
                    }

                    // turn on tooltips
                    chart.options.tooltips.enabled = true;
                    Chart.helpers.each(chart.pluginTooltips, function(tooltip) {
                        tooltip.initialize();
                        tooltip.update();
                        // we don't actually need this since we are not animating tooltips
                        tooltip.pivot();
                        tooltip.transition(easing).draw();
                    });
                    chart.options.tooltips.enabled = false;
                }
            }
        });
        // Update chart
        myChart.update();
    }


});


// Chart.js Perfomance page. 1 canvas
$(document).ready(function () {
    let ctx = document.getElementById('perf__graph')
    if (ctx) {

    let dataCanvas = $('#perf__graph').data();
    let arrCanvas = [];
    for (key in dataCanvas) {
        arrCanvas.push(dataCanvas[key]);
    }

    ctx = document.getElementById('perf__graph').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(100, 0, 500, 0);
    gradientStroke.addColorStop(0, '#3f89e8');
    gradientStroke.addColorStop(1, '#5ebafe');

    var gradientFill = ctx.createLinearGradient(0, 200, 0, 0);
    gradientFill.addColorStop(0, "rgba(115, 189, 245, 0)");
    gradientFill.addColorStop(1, "rgba(63, 137, 232, 1)");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["", "Year 1", "Year 2", "Year 3", ""],
            datasets: [{
                label: "Approx",
                borderColor: gradientStroke,
                pointBorderColor: '#fff',
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointBorderWidth: 5,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 1,
                pointRadius: 10,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 4,
                data: arrCanvas,
                lineTension: 0
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#475871",
                        fontStyle: "500",
                        fontFamily: "AvenirNextCyr",
                        fontSize: 16,
                        beginAtZero: false,
                        min: 10000,
                        maxTicksLimit: 5,
                        padding: 20,
                        beginAtZero: true,
                        stepSize: 10000,
                        callback: function(value) {
                            return `$ ${value}`
                        },
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        fontColor: "#475871",
                        fontStyle: "500",
                        fontFamily: "AvenirNextCyr",
                        fontSize: 16,
                        beginAtZero: false,
                        maxTicksLimit: 5,
                        padding: 20,
                    }
                }]
            },
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#475871',
                titleAlign: 'center',
                titleFontFamily: "AvenirNextCyr",
                titleFontStyle: "500",
                titleFontSize: 14,
                bodyFontColor: '#1a273a',
                bodyFontSize: 18,
                bodyFontFamily: "AvenirNextCyr",
                bodyFontStyle: "700",
                displayColors: false,
                cornerRadius: 10,
                xPadding: 10,
                yPadding: 15,
                callbacks: {
                    title: function (tooltipItem, data) {
                        return 'Approx'
                    },
                    label: function (tooltipItem, data) {
                        var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        console.log(value)
                        return value;
                    }
                }
            }
        }
    });

    let lengthData = myChart.data.datasets[0].data.length;
    let radius = myChart.data.datasets[0].pointRadius;
    let radiusArray = [];
    for (let i = 0; i < lengthData; i++) {
        radiusArray.push(radius);
    }

    radiusArray[0] = 0;
    radiusArray[radiusArray.length - 1] = 0;

    myChart.data.datasets[0].pointRadius = radiusArray;
    myChart.update();
    }

});


// Altv5 Chart
$(document).ready(function () {

    let firstData = $('.g-1').data();
    let secondData = $('.g-2').data();
    let thirdData = $('.g-3').data();
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for (key in firstData) {
        arr1.push(firstData[key]);
    }
    for (key in secondData) {
        arr2.push(secondData[key]);
    }
    for (key in thirdData) {
        arr3.push(thirdData[key]);
    }

    var ctx = document.getElementById('graph3').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(100, 0, 500, 0);
    gradientStroke.addColorStop(0, '#3f89e8');
    gradientStroke.addColorStop(1, '#5ebafe');

    // var gradientFill = ctx.createLinearGradient(0, 150, 0, 0);
    // gradientFill.addColorStop(0, "rgba(115, 189, 245, 0)");
    // gradientFill.addColorStop(1, "rgba(63, 137, 232, 1)");

    // var gradientFill2 = ctx.createLinearGradient(0, 300, 0, 0);
    // gradientFill.addColorStop(0, "#9c54ee");
    // gradientFill.addColorStop(1, "rgb(115, 189, 245)");

    // var gradientFill3 = ctx.createLinearGradient(0, 200, 0, 0);
    // gradientFill.addColorStop(0, "#fdcc60");
    // gradientFill.addColorStop(1, "rgba(115, 189, 245, 1)");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [
            {
                label: "Year 1",
                borderColor: gradientStroke,
                pointBorderColor: '#fff',
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointBorderWidth: 5,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 1,
                pointRadius: 10,
                fill: true,
                backgroundColor: 'rgba(255,255,255, .1)',
                borderWidth: 4,
                data: arr1,
                lineTension: 0
            },
            {
                label: "Year 2",
                borderColor: '#9d54ee',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#9d54ee',
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointBorderWidth: 5,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 1,
                pointRadius: 10,
                fill: true,
                backgroundColor: 'rgba(255,255,255, .1)',
                borderWidth: 4,
                data: arr2,
                lineTension: 0
            },
            {
                label: "Year 3",
                borderColor: '#fdcc60',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#fdcc60',
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointBorderWidth: 5,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 1,
                pointRadius: 10,
                fill: true,
                backgroundColor: 'rgba(255,255,255, .1)',
                borderWidth: 4,
                data: arr3,
                lineTension: 0
            }
        ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#475871",
                        fontStyle: "500",
                        fontFamily: "AvenirNextCyr",
                        fontSize: 16,
                        beginAtZero: false,
                        min: 20000,
                        maxTicksLimit: 5,
                        padding: 20,
                        beginAtZero: true,
                        stepSize: 10000,
                        callback: function(value) {
                            return `$ ${value}`
                        },
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "rgba(217, 224, 232, .55)"
                    },
                    ticks: {
                        fontColor: "#475871",
                        fontStyle: "500",
                        fontFamily: "AvenirNextCyr",
                        fontSize: 16,
                        beginAtZero: false,
                        maxTicksLimit: 5,
                        padding: 20,
                    }
                }]
            },
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#475871',
                titleAlign: 'center',
                titleFontFamily: "AvenirNextCyr",
                titleFontStyle: "500",
                titleFontSize: 14,
                bodyFontColor: '#1a273a',
                bodyFontSize: 18,
                bodyFontFamily: "AvenirNextCyr",
                bodyFontStyle: "700",
                displayColors: false,
                cornerRadius: 10,
                xPadding: 10,
                yPadding: 15,
                callbacks: {
                    title: function (tooltipItem, data) {
                        return 'Approx'
                    },
                    label: function (tooltipItem, data) {
                        var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        return value;
                    }
                }
            }
        }
    });
})