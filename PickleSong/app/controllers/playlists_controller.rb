class PlaylistsController < ApplicationController
  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.create!(playlist_params)
      # binding.pry
      # if request.xhr?
      #   format.js
      # else
      #   format.html {redirect_to root_path}
      # end
      # respond_to do |format|
      #   format.html {redirect_to root_path}
      #   format.js
      # end
    # else
    #   flash[:notice] = "Please name your playlist."
    #   render "welcome/index"
    # end
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
