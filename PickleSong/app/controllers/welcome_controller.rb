class WelcomeController < ApplicationController
  def index
    @playlists = Playlist.all
    @query = SongPicklr::Search.new(params[:q])
    if params[:q]
      @results = @query.query_items
      @first_result = @results.first
      # binding.pry
      @alternatives = @results[1..-1]
    end
    render :index
  end
end
