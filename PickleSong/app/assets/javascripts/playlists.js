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



    $(".playlist_submit").click(function() {
        debugger;
        $.post("/playlists", function(data) {
            console.log("worked");
            debugger;
            $("element").append(data)
        })
    })
});