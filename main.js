 (function($) {
    //Smooth scroll transition when item clicked in nav 
    $('a.page-scroll').click(function() {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $( $anchor.attr('href')).offset().top
        }, 700);
        return false;
    });

    //Highlights top of nav when scrolling
    $('body').scrollspy({target: '#navbar'});

})(jQuery);
