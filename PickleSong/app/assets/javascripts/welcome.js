$( document ).on( 'page:change', function () {
  $('.playlist').click(function() {
    var id = $('.playlist').data('id')
    $('#playlist_songs').append(<%=Playlist.find(id).name%>);
  });
});