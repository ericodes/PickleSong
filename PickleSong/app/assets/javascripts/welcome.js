$(document).on('page:change', function() {
    $('.playlist').click(function() {
        var songData = $('.playlist').data('songs');
        var playlistName = $('.playlist').data('name');
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