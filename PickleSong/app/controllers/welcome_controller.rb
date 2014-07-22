class WelcomeController < ApplicationController
  def index
    results = SongPicklr::Search.new("Beyonce")
    @result = results.query_items.first
  end
end
