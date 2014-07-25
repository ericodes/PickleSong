$(document).on('page:change', function() {
    $('.vid-item').click(function() {
        console.log('clicked');
        var embedUrl = $(this).data('embed_url');
        document.getElementById('vid_frame').src = "//" + embedUrl;
    });
});

$(document).on('page:change', function() {
    $(".arrow-right").bind("click", function(event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".arrow-left").bind("click", function(event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });
});