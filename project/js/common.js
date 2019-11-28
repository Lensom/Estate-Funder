// Mobile menu
$(document).ready(function () {
    $('.header__mobile').on('click', function () {
        $('body').toggleClass('show');
    })
});

// Owl carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 20,
        nav: true,
        dost: false,
        responsive: {
            768: {
                margin: 40,
                items: 3
            },
            568: {
                items: 2,
                loop: true,
                center: true,
                autoWidth: false
            },
            320: {
                items: 1,
                autoWidth: true,
                center: true,
                loop: true
            }
        }
    });
});

// Chart.js Main page
$(document).ready(function () {
    let ctx = document.getElementById('myChart').getContext("2d");

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

});

// Profile tabs
$(document).ready(function () {
    $('.profile__links-link').on('click', function (e) {
        e.preventDefault();
        let index = $(this).index();

        $('.profile__links-link').removeClass('active');
        $(this).addClass('active');

        $('.profile__item').removeClass('active');
        let activeBody = $('.profile__item')[index];
        $(activeBody).addClass('active');
    });
});

// Profile edit tabs
$(document).ready(function() {
    $('.edit').on('click', function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        let id = $(this).data('id');
        $('.profile__item').removeClass('active');
        $(`#${id}`).addClass('active');
    });
})

// Checkbox toggle
$(document).ready(function () {
    $('.form__respond input[type="checkbox"]').on('change', function () {
        $('.form__respond input[type="checkbox"]').not(this).prop('checked', false);
    });

    $('.form__agree input[type="checkbox"]').on('change', function () {
        $(':submit').attr('disabled', function (_, attr) { return !attr });
    });
})

// Accordions
$(document).ready(function () {
    $(function(){
        $('.accordion .accordion__question').on('click', function(){
        let parent = $(this).parent();
        if ($(parent).hasClass('show')) {
          $(parent).removeClass('show');
        } else {
          $('.accordion__item').removeClass('show');
          $(parent).addClass('show');
        }
            let answer = $(this).next();
            $('.accordion .accordion__answer:visible').not(answer).slideUp(200);
            answer.slideToggle(200);
        });
    });
});

// Styler.js for select
$(document).ready(function() {
    $('.form__select').styler();
    $('.state__select').styler();
});

// Drag And drop Area 
$(document).ready(function() {
   // ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area");

if (dropArea) {
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)   
        document.body.addEventListener(eventName, preventDefaults, false)
    });
    
    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
    })

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false)
}


function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files

  handleFiles(files)
}

let uploadProgress = []

function initializeProgress(numFiles) {

  uploadProgress = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
  }
}
function handleFiles(files) {
  files = [...files]
  initializeProgress(files.length)
  files.forEach(uploadFile)
  files.forEach(previewFile)
}

})

// Trigger actions table
$(document).ready(function() {
    $('.table__toggle-trigger').on('click', function() {
        $('.table__toggle').addClass('hidden');
        $(this).siblings('.table__toggle').toggleClass('hidden');
    });
})

// Chart.js etabs

let dataCanvas = $('canvas').data();
let arrCanvas = [];
for (key in dataCanvas) {
  arrCanvas.push(dataCanvas[key]);
}
arrCanvas.reverse();


var etabs = document.getElementById('return__graph').getContext("2d");

// etabs.style.backgroundColor = 'red';
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


var etabs2 = document.getElementById('return__graph-2').getContext("2d");
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

// Efund and eDirect tabs
$('.profile__links-link').on('click', function() {
    $('.ed, .et').toggleClass('hidden');
});