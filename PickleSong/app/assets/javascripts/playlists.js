$(document).on('page:change', function() {
    $('.playlist').click(function() {
        var songData = $(this).data('songs');
        $('#playlist_songs').empty();
        var playlist = $(this);
        var titleTemplate = "<h4 class='active-playlist' data-id='<%= item.data('playlistid') %>'><%= item.data('name') %></h4>";
        var titleTemp = _.template(titleTemplate);
        $('#playlist_songs').append(titleTemp({
            item: playlist
        }));
        for (var i = 0; i < songData.length; i++) {
            var templateString = "<div class='song'><h4><%= item.title %></h4><div><img src='<%=item.thumbnail%>'></div></div>";
            var template = _.template(templateString);
            $('#playlist_songs').append(template({
                item: songData[i]
            }));
        }
    });
});