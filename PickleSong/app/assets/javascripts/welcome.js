$(document).on('page:change', function() {
    $('.playlist').click(function() {
        var songData = $('.playlist').data('songs');
        for (var i = 0; i < songData.length; i++) {
            $('#playlist_songs').append("<div class=song><h4>" + songData[i].title + "</h4>" + "<div><img src=" + songData[i].thumbnail + " /></div></div>");
        }
    });
});

$(document).ready(function() {
    $('.vid-item').click(function() {
        var embedUrl = $(this).data('embed_url');
        document.getElementById('vid_frame').src = "//" + embedUrl;
    });
});
