$(document).on('page:change', function() {
    $('.playlist').click(function() {
        var songData = $('.playlist').data('songs');
        for (var i = 0; i < songData.length; i++) {
            $('#playlist_songs').append("<div class=song><h4>" + songData[i].title + "</h4>" + "<div><img src=" + songData[i].thumbnail + " /></div></div>");
        }
    });
});


$(document).ready(function() {
    $('.vid-item-0').click(function() {
        var embedUrl = $('.vid-item-0').data('embed_url');
        // console.log(embedUrl);
        // console.log("What's in iframe now: " + document.getElementById('vid_frame').src);
        document.getElementById('vid_frame').src = "//" + embedUrl;
        // console.log("Replaced: " + document.getElementById('vid_frame').src);
    });
    $('.vid-item-1').click(function() {
        var embedUrl = $('.vid-item-1').data('embed_url');
        // console.log(embedUrl);
        // console.log("What's in iframe now: " + document.getElementById('vid_frame').src);
        document.getElementById('vid_frame').src = "//" + embedUrl;
        // console.log("Replaced: " + document.getElementById('vid_frame').src);
    });
    $('.vid-item-2').click(function() {
        var embedUrl = $('.vid-item-2').data('embed_url');
        // console.log(embedUrl);
        // console.log("What's in iframe now: " + document.getElementById('vid_frame').src);
        document.getElementById('vid_frame').src = "//" + embedUrl;
        // console.log("Replaced: " + document.getElementById('vid_frame').src);
    });
    $('.vid-item-3').click(function() {
        var embedUrl = $('.vid-item-3').data('embed_url');
        // console.log(embedUrl);
        // console.log("What's in iframe now: " + document.getElementById('vid_frame').src);
        document.getElementById('vid_frame').src = "//" + embedUrl;
        // console.log("Replaced: " + document.getElementById('vid_frame').src);
    });
});
