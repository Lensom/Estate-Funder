// Mobile menu
$(document).ready(function () {
    $('.header__mobile').on('click', function () {
        $('body').toggleClass('show');
    })
});

// Owl carousel
$(document).ready(function () {
    $("#owl__card").owlCarousel({
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

// Preview Carousel
$(document).ready(function () {
    var sync1 = $(".slider");
    var sync2 = $(".navigation-thumbs");
    
    var thumbnailItemClass = '.owl-item';
    
    var slides = sync1.owlCarousel({
        video:true,
      startPosition: 12,
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      nav: false,
      dots: true
    }).on('changed.owl.carousel', syncPosition);
    
    function syncPosition(el) {
      $owl_slider = $(this).data('owl.carousel');
      var loop = $owl_slider.options.loop;
    
      if(loop){
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }
      }else{
        var current = el.item.index;
      }
    
      var owl_thumbnail = sync2.data('owl.carousel');
      var itemClass = "." + owl_thumbnail.options.itemClass;
    
    
      var thumbnailCurrentItem = sync2
      .find(itemClass)
      .removeClass("synced")
      .eq(current);
    
      thumbnailCurrentItem.addClass('synced');
    
      if (!thumbnailCurrentItem.hasClass('active')) {
        var duration = 300;
        sync2.trigger('to.owl.carousel',[current, duration, true]);
      }   
    }
    var thumbs = sync2.owlCarousel({
      startPosition: 1,
      items: 6,
      loop: false,
      margin: 40,
      autoplay: false,
      nav: false,
      dots: false,
      onInitialized: function (e) {
        var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
        thumbnailCurrentItem.addClass('synced');
      },
    })
    .on('click', thumbnailItemClass, function(e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
        sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
    }).on("changed.owl.carousel", function (el) {
      var number = el.item.index;
      $owl_slider = sync1.data('owl.carousel');
      $owl_slider.to(number, 100, true);
    });
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
    $('.invin__group').styler();
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
        $(this).siblings('.table__toggle').toggleClass('hidden');
    });
})

// $(document).ready(function() {
//     $('.table__toggle-trigger').on('click', function() {
//         // $('.table__toggle').addClass('hidden');
//         $(this).siblings('.table__toggle').toggleClass('hidden');
//         // if ($(this).siblings('.table__toggle').not('.hidden')) {
//             // $(this).siblings('.table__toggle').addClass('hidden');
//         // }
//     });
// })

// Efund and eDirect tabs
$(document).ready(function() {
    $('.profile__links-link').on('click', function() {
        $('.ed, .et').toggleClass('hidden');
    });
})

// RANGE SLIDER
$(document).ready(function() {
    let slider = document.getElementById('slider');
    let value = document.getElementById("text");
    let inputs = [value];
    if (slider) {
        noUiSlider.create(slider, {
            start: 5000,
            connect: [true, false],
            range: {
                'min': 5000,
                'max': 500000
            },
            step: 1000,
            format: {
            from: function(value) {
                    return Math.round(+value);
                },
            to: function(value) {
                    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }  )
                                    .format(value).replace(/^(\D+)/, '$1');
                }
            },
            tooltips: true
        });
        
        slider.noUiSlider.on('update', function (values, handle) {
            value.innerHTML = values[handle];
        });

        slider.noUiSlider.on('change', function(values) {
            let amount = values[0];
            let v = amount.replace(/\.|,/g, "");
            let s = v.substring(0, v.length -2);
            let k = s.substr(1);

            $(value).val(k)
        });

        inputs.forEach(function(input, handle) {
            input.addEventListener('keyup', function(e) {
                let input = e.target.value;
                let k = input.replace(/\./g, "");
                let v = k.replace(/,/g, "");
                slider.noUiSlider.set(v);
        
                var position;
                switch (e.which) {
                    case 13:
                        slider.noUiSlider.setHandle(handle, this.value);
                        break;
                    case 38:
                        position = step[1];
                        if (position === false) {
                            position = 1;
                        }
                        if (position !== null) {
                            slider.noUiSlider.setHandle(handle, value + position);
                        }
        
                        break;
        
                    case 40:
        
                        position = step[0];
                        if (position === false) {
                            position = 1;
                        }
                        if (position !== null) {
                            slider.noUiSlider.setHandle(handle, value - position);
                        }
        
                        break;
                }
            });
        });
        
        let calcInput = document.getElementById('text');
        calcInput.onkeydown = function(e) {
            if ((e.which >= 48 && e.which <= 57) // numbers
                ||
                (e.which >= 96 && e.which <= 105) // num lock
                ||
                e.which == 8 // backspace
                ||
                (e.which >= 37 && e.which <= 40) // arrows
                ||
                e.which == 46 || e.which == 13) // delete and enter
            {
                return true;
            } else {
                return false;
            }
        };
    }
});

// Credit card fields
$(document).ready(function() {
    $('.cc-number').formatCardNumber();
    $('.cc-expires').formatCardExpiry();
    $('.cc-cvc').formatCardCVC();
});

// Dashboard trigger
$(document).ready(function() {
    $('.header__profile a').on('click', function(e) {
        e.preventDefault();
        $('.header__dash').fadeToggle(300);
    });
});

// Mask input
$(document).ready(function() {
    $(".date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
});

// Form tabs 
$(document).ready(function () {
    $('.form__tab a').on('click', function (e) {
        e.preventDefault();
        let index = $(this).index();

        $('.form__tab a').removeClass('active');
        $(this).addClass('active');

        $('.form__body').removeClass('active');
        let activeBody = $('.form__body')[index];
        $(activeBody).addClass('active');
    });
});

// Added one more form
$(document).ready(function() {
    $('.form__add a').on('click', function(e) {
        e.preventDefault();
        $('.form__tab a').removeClass('active');
        $('a.hidden').addClass('active').removeClass('hidden');
        $('.form__add').css('display', 'none');
        $('.form__body').removeClass('active');
        $('.form__body-hidden').addClass('active').removeClass('form__body-hidden');
    });
});