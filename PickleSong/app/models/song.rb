class Song < ActiveRecord::Base
  belongs_to :artist
  has_many :song_playlists
  has_many :playlists, through: :song_playlists
end
