// Mobile menu
$(document).ready(function () {
    $('.header__mobile').on('click', function() {
        $('body').toggleClass('show');
    })
});


// Owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 20,
        responsive: {
            768: {
                margin: 40,
                items: 3
            },
            568: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });
});