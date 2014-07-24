class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    @query = SongPicklr::Search.new(params[:q])
    if params[:q]
      @results = @query.query_items
      # binding.pry
      @first_result = @results.first
      @alternatives = @results[1..-1]
    end
    render :index
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @new_playlist = Playlist.create!(playlist_params)
    # binding.pry
      respond_to do |format|
        format.html { redirect_to playlists_url }
        format.js
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end


end