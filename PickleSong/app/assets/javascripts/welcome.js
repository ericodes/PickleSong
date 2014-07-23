$(document).on('page:change', function() {
    $('.playlist').click(function() {
        var songData = $(this).data('songs');
        var playlistName = $(this).data('name');
        $('#playlist_songs').empty();
        for (var i = 0; i < songData.length; i++) {
            var templateString = "<div class='song'><h4><%= item.title %></h4><div><img src='<%=item.thumbnail%>'></div></div>";
            var template = _.template(templateString);
            $('#playlist_songs').append(template({
                item: songData[i]
            }));
        }
    });
});

$(document).ready(function() {
    $('.vid-item').click(function() {
        var embedUrl = $(this).data('embed_url');
        document.getElementById('vid_frame').src = "//" + embedUrl;
    });
});

$(document).ready(function () {
    $(".arrow-right").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".arrow-left").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });
});
