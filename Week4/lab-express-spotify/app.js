const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// require spotify-web-api-node package here:
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// setting the spotify-api goes here:
const clientId = 'ae0acdd799ba4425b71dc130d4e90bca';
const clientSecret = '40d78e15a6b940b3816d82833bbb010f';

const spotifyApi = new SpotifyWebApi({ clientId, clientSecret });


// Retrieve an access token
spotifyApi.clientCredentialsGrant()
  .then((data) => {
    spotifyApi.setAccessToken(data.body['access_token']);
  })
  .catch((error) => {
    console.log('Something went wrong when retrieving an access token', error);
  });

// the routes go here:

app.get('/', (req, res, next) => {
  res.render('index');
});

app.post('/artists', (req, res, next) => {
  spotifyApi.searchArtists(req.body.artist)
    .then((data) => {
      const search = data.body.artists.items;
      
      console.log(search[0]);
      res.render('artists', { artist: search });
    })
    .catch((err) => {
      console.log('The error while searching artists occurred: ', err);
    });
});

app.get('/albums/:artistId', (req, res, next) => {
  spotifyApi.getArtistAlbums(req)
  .then((data) => {
    res.render('albums')
    console.log('Artist albums', data);
  }, (err) => {
    console.error(err);
  });
});

app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
