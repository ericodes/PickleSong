class WelcomeController < ApplicationController
  def index
    results = SongPicklr::Search.new(params[:q])
    @result = results.query_items.first
    render :index
  end
end
