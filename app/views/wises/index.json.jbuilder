json.array!(@wises) do |wise|
  json.extract! wise, :writer, :saying
  json.url wise_url(wise, format: :json)
end
