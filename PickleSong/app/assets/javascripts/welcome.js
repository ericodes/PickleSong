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
        };
    });
});

$(document).ready(function() {
    $('.vid-item').click(function() {
        var embedUrl = $(this).data('embed_url');
        // console.log(embedUrl);
        // console.log("What's in iframe now: " + document.getElementById('vid_frame').src);
        document.getElementById('vid_frame').src = "//" + embedUrl;
        // console.log("Replaced: " + document.getElementById('vid_frame').src);
    });
});