class ResultsController < ApplicationController
  def new
  end

  def create
    @query = SongPicklr::Search.new(params[:q])
    if params[:q]
      @results = @query.query_items
      @first_result = @results.first
      # binding.pry
      @alternatives = @results[1..-1]
    end
    @playlists = Playlist.all
    render "welcome/index"
  end

end


    
