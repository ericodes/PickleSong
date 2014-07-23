class PlaylistsController < ApplicationController
  def index
    @playlist = Playlist.new
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

  def create
    @new_playlist = Playlist.new(playlist_params)
    if !@new_playlist.save
      flash[:notice] = "Please enter a name."
    end
    redirect_to root_path
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end


end