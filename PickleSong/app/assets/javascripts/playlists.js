$(document).on('page:change', function() {
    $('.playlist').click(function() {
        var songData = $(this).data('songs');
        $('#playlist_songs').empty();
        var playlistName = $(this).contents();
        $('#playlist_songs').append('< h4 >'
            playlistName '< /h4>');
        for (var i = 0; i < songData.length; i++) {
            var templateString = "<div class='song'><h4><%= item.title %></h4 > < div > < img src = '<%=item.thumbnail%>' > < /div></div > ";
            var template = _.template(templateString);
            $('#playlist_songs').append(template({
                item: songData[i]
            }));
        }
    });
});