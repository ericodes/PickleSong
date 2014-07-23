class WelcomeController < ApplicationController
  def index
    @query = SongPicklr::Search.new(params[:q])
    @results = @query.query_items if params[:q]
    # @result = @results.query_items.first if params[:q]
    render :index
  end
end
