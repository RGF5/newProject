$(function() {

$(window).scroll(function() {
 if ( $(this).scrollTop() > 50 ) {
$('navbar').addClass('solid bg-dark');
} else {
    $('.navbar').removeClass('solid bg-dark');
}
});

$('.dropdown-item .navlink').on('click', function(e) {
    if ( this.hash !== "" ) {
    e.preventDefault();
    const anchor = this.hash; //# projectAnchor

    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 800, function() {
        window.location.hash = anchor;
        });
     }
    });
});

$(function() {
    $('navbar').on('click', function() {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function() {
            $(this).remove();
        });
        });
    });