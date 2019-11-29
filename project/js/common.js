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

// Efund and eDirect tabs
$('.profile__links-link').on('click', function() {
    $('.ed, .et').toggleClass('hidden');
});
