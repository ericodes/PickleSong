module SongPicklr
  class Result

    def initialize(query_item)
      @query_item = query_item
    end

    def title
      @title ||= query_item["snippet"]["title"]
    end

    def video_id
      @video_id ||= query_item["id"]["videoId"]
    end

    def url
      @url ||= "youtube.com/watch?v=#{@video_id}"
    end

    def embed_url
      @embed_url ||= "youtube.com/embed/#{@video_id}"

    def thumbnail
      @thumbnail ||= query_item["snippet"]["thumbnails"]["medium"]["url"]
    end

    def attributes 
      {
        title: title,
        video_id: video_id,
        url: url,
        thumbnail: thumbnail
        embed_url: embed_url
      }
