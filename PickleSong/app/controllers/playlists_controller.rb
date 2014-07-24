class PlaylistsController < ApplicationController
  def new
    @playlist = Playlist.new
  end

  def create
    playlist = Playlist.new(playlist_params)
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name, :id)
  end
end
