// Import necessary modules and models
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

// Import models
const Artist = require('./models/artist');
const Album = require('./models/album');
const Music = require('./models/music');
const User = require('./models/user');
const PremiumUser = require('./models/premiumusers');
const Admin = require('./models/admin');
const FavoriteSong = require('./models/favoritesongs');
const RecentSong = require('./models/recentsongs');
const DownloadedSong = require('./models/downloadedsongs');

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/musicdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database successfully');
}).catch((error) => {
  console.error('Could not connect to the database:', error.message);
});

// Insert data
async function seedData() {
  try {
    // Artists
    const artistsData = [
      { name: 'Adele', country: 'United Kingdom', genre: 'Pop', followers: 1000000 },
      { name: 'Ed Sheeran', country: 'United Kingdom', genre: 'Pop', followers: 1500000 },
      { name: 'Beyoncé', country: 'United States', genre: 'R&B', followers: 2000000 },
      { name: 'Drake', country: 'Canada', genre: 'Hip Hop', followers: 1800000 },
      { name: 'Taylor Swift', country: 'United States', genre: 'Pop', followers: 2200000 },
      { name: 'The Weeknd', country: 'Canada', genre: 'R&B', followers: 1700000 },
      { name: 'Katy Perry', country: 'United States', genre: 'Pop', followers: 1600000 },
      { name: 'Bruno Mars', country: 'United States', genre: 'Pop', followers: 1900000 },
      { name: 'Eminem', country: 'United States', genre: 'Hip Hop', followers: 2100000 },
      { name: 'Rihanna', country: 'Barbados', genre: 'R&B', followers: 2300000 },
    ];
    const artists = await Artist.insertMany(artistsData);

    // Albums
    const albumsData = [
      { title: '21', artist: artists[0]._id },
      { title: 'Divide', artist: artists[1]._id },
      { title: 'Lemonade', artist: artists[2]._id },
      { title: 'Scorpion', artist: artists[3]._id },
      { title: '1989', artist: artists[4]._id },
      { title: 'After Hours', artist: artists[5]._id },
      { title: 'Teenage Dream', artist: artists[6]._id },
      { title: '24K Magic', artist: artists[7]._id },
      { title: 'The Eminem Show', artist: artists[8]._id },
      { title: 'Good Girl Gone Bad', artist: artists[9]._id },
    ];
    const albums = await Album.insertMany(albumsData);

    // Musics
    const musicsData = [
      { name: 'Someone Like You', premium: true, artist: artists[0]._id, album: albums[0]._id, genre: 'Pop', duration: 240 },
      { name: 'Shape of You', premium: false, artist: artists[1]._id, album: albums[1]._id, genre: 'Pop', duration: 230 },
      { name: 'Halo', premium: true, artist: artists[2]._id, album: albums[2]._id, genre: 'R&B', duration: 210 },
      { name: 'Hotline Bling', premium: false, artist: artists[3]._id, album: albums[3]._id, genre: 'Hip Hop', duration: 240 },
      { name: 'Shake It Off', premium: true, artist: artists[4]._id, album: albums[4]._id, genre: 'Pop', duration: 220 },
      { name: 'Blinding Lights', premium: false, artist: artists[5]._id, album: albums[5]._id, genre: 'R&B', duration: 200 },
      { name: 'California Gurls', premium: true, artist: artists[6]._id, album: albums[6]._id, genre: 'Pop', duration: 220 },
      { name: 'Uptown Funk', premium: false, artist: artists[7]._id, album: albums[7]._id, genre: 'Pop', duration: 210 },
      { name: 'Lose Yourself', premium: true, artist: artists[8]._id, album: albums[8]._id, genre: 'Hip Hop', duration: 230 },
      { name: 'Umbrella', premium: false, artist: artists[9]._id, album: albums[9]._id, genre: 'R&B', duration: 220 },
    ];
    const musics = await Music.insertMany(musicsData);

    // Users
    const usersData = [
      { username: 'john_doe', password: 'secure_password', email: 'john@example.com' },
      { username: 'jane_smith', password: 'strong_password', email: 'jane@example.com' },
      { username: 'bob_jones', password: 'secret_password', email: 'bob@example.com' },
      { username: 'alice_lee', password: 'password123', email: 'alice@example.com' },
      { username: 'charlie_brown', password: 'brownie', email: 'charlie@example.com' },
      { username: 'emma_watson', password: 'emmaw', email: 'emma@example.com' },
      { username: 'michael_jordan', password: 'mj23', email: 'michael@example.com' },
      { username: 'olivia_smith', password: 'olivia', email: 'olivia@example.com' },
      { username: 'samuel_jackson', password: 'samuel', email: 'samuel@example.com' },
      { username: 'emily_jones', password: 'emily', email: 'emily@example.com' },
    ];
    const users = await User.insertMany(usersData);

    // Premium Users
    const premiumUsersData = [
      { user: users[0]._id },
      { user: users[1]._id },
      { user: users[2]._id },
      { user: users[3]._id },
      { user: users[4]._id },
      { user: users[5]._id },
      { user: users[6]._id },
      { user: users[7]._id },
      { user: users[8]._id },
      { user: users[9]._id },
    ];
    const premiumUsers = await PremiumUser.insertMany(premiumUsersData);

    // Admins
    const adminsData = [
      { username: 'admin1', password: 'admin_password' },
      { username: 'admin2', password: 'admin_password' },
      { username: 'admin3', password: 'admin_password' },
      { username: 'admin4', password: 'admin_password' },
      { username: 'admin5', password: 'admin_password' },
      { username: 'admin6', password: 'admin_password' },
      { username: 'admin7', password: 'admin_password' },
      { username: 'admin8', password: 'admin_password' },
      { username: 'admin9', password: 'admin_password' },
      { username: 'admin10', password: 'admin_password' },
    ];
    const admins = await Admin.insertMany(adminsData);

    // Favorite Songs
    const favoriteSongsData = [
      { user: users[0]._id, song: musics[0]._id },
      { user: users[1]._id, song: musics[1]._id },
      { user: users[2]._id, song: musics[2]._id },
      { user: users[3]._id, song: musics[3]._id },
      { user: users[4]._id, song: musics[4]._id },
      { user: users[5]._id, song: musics[5]._id },
      { user: users[6]._id, song: musics[6]._id },
      { user: users[7]._id, song: musics[7]._id },
      { user: users[8]._id, song: musics[8]._id },
      { user: users[9]._id, song: musics[9]._id },
    ];
    const favoriteSongs = await FavoriteSong.insertMany(favoriteSongsData);

    // Recent Songs
    const recentSongsData = [
      { user: users[0]._id, song: musics[0]._id },
      { user: users[1]._id, song: musics[1]._id },
      { user: users[2]._id, song: musics[2]._id },
      { user: users[3]._id, song: musics[3]._id },
      { user: users[4]._id, song: musics[4]._id },
      { user: users[5]._id, song: musics[5]._id },
      { user: users[6]._id, song: musics[6]._id },
      { user: users[7]._id, song: musics[7]._id },
      { user: users[8]._id, song: musics[8]._id },
      { user: users[9]._id, song: musics[9]._id },
    ];
    const recentSongs = await RecentSong.insertMany(recentSongsData);

    // Downloaded Songs
    const downloadedSongsData = [
      { user: users[0]._id, song: musics[0]._id },
      { user: users[1]._id, song: musics[1]._id },
      { user: users[2]._id, song: musics[2]._id },
      { user: users[3]._id, song: musics[3]._id },
      { user: users[4]._id, song: musics[4]._id },
      { user: users[5]._id, song: musics[5]._id },
      { user: users[6]._id, song: musics[6]._id },
      { user: users[7]._id, song: musics[7]._id },
      { user: users[8]._id, song: musics[8]._id },
      { user: users[9]._id, song: musics[9]._id },
    ];
    const downloadedSongs = await DownloadedSong.insertMany(downloadedSongsData);

    console.log('Sample data added successfully');
  } catch (error) {
    console.error('Error adding sample data:', error.message);
  } finally {
    // Disconnect from the database after inserting data
    mongoose.disconnect();
  }
}

// Run the seedData function
seedData();

// Set up the server to listen on a port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
