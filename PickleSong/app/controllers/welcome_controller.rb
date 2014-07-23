class WelcomeController < ApplicationController
  def index
    @query = SongPicklr::Search.new(params[:q])
    if params[:q]
      @results = @query.query_items
      # binding.pry
      @first_result = @results.first
      @alternatives = @results[1..-1]
    end
    render :index
  end
end
