$( document ).on( 'page:change', function () {
  $('.playlist').click(function() {
    var songData = $('.playlist').data('songs');
    for(var i=0; i<songData.length; i++) {
      $('#playlist_songs').append(songData[i].name);
    };
  });
});