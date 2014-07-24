class WelcomeController < ApplicationController
  def index
    @playlists = Playlist.all
  end
end
