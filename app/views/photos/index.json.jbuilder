json.array!(@photos) do |photo|
  json.extract! photo, :id, :title, :image, :like
  #json.url photo_url(photo, format: :json)
end
