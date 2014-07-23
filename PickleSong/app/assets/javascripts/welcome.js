$(document).on('page:change', function() {
    $('.playlist').click(function() {
        var songData = $('.playlist').data('songs');
        for (var i = 0; i < songData.length; i++) {
            $('#playlist_songs').append("<div class=song><h4>" + songData[i].title + "</h4>" + "<div><img src=" + songData[i].thumbnail + " /></div></div>");
        }
    });
});


