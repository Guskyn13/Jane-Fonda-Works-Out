
gifs = [
   "https://media.giphy.com/media/U8RXSRKv8uMPS/giphy.gif",
   "https://media.giphy.com/media/6Lt0PMyvjTX8c/giphy.gif",
   "https://media.giphy.com/media/RIXkKMH70J5A42oNt5/giphy.gif",
   "https://media.giphy.com/media/fPWJGmS8Qizy8/giphy.gif"
]

# rest_client = RestClient.get , {:Authorization => 'Token e3d5c86b1a79d3bb902b6a31376c627c16c46145'}
# rest_client = RestClient.get('https://wger.de/api/v2/exerciseinfo', headers: {:Authorization => "Token e3d5c86b1a79d3bb902b6a31376c627c16c46145"})

# RestClient::Request.execute(method: :get, url: 'https://wger.de/api/v2/exerciseinfo', timeout: 120)

rest_client = RestClient::Request.execute(method: :get, url: 'https://wger.de/api/v2/exerciseinfo', headers:{Authorization: "Token e3d5c86b1a79d3bb902b6a31376c627c16c46145"}, timeout: 120)
result= JSON.parse(rest_client)

result["results"].map do |exercise|
   Exercise.create(
      name: exercise["name"],
      description: exercise["description"],
      gif: gifs[rand(4)]
   )
end
# user1 = User.create(username: "Phil", password: "1234")
# exercise1 = Exercise.create(name: "Squat", description: "Squat")
# favorite1 = Favorite.create(user: user1, exercise: exercise1)