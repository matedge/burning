json.extract! flight, :id, :date, :origin, :destination, :created_at, :updated_at, :plane_id
json.url flight_url(flight, format: :json)
