require 'rest-client'

gifs = ([
   {name: "crazy pants", gif_url: "https://media0.giphy.com/media/vwKp0DLW21fji/giphy.gif"},
   {name: "Wall Sit", gif_url: "https://media0.giphy.com/media/QixKX2MnXONRC/giphy.gif"},
   {name: "Speed Demon", gif_url: "https://media1.giphy.com/media/10cylTGU0KcAsE/giphy.gif"},
   {name: "Jacket", gif_url: "https://media3.giphy.com/media/l2Jhx6TQ6P3WAnv8c/giphy.gif"},
   {name: "Running Man", gif_url: "https://media1.giphy.com/media/2CakzXbzWpnGbVlmaT/giphy.gif"}
])

# rest_client = RestClient.get 'https://wger.de/api/v2/exercise/api/v2/exercise/'

user1 = User.create(username: "Phil", password: "1234")
exercise1 = Exercise.create(name: "Squat", description: "Squat")
favorite1 = Favorite.create(user: user1, exercise: exercise1)