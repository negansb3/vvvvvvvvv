const tmi = require('tmi.js');

// Replace these values with your Twitch credentials
const USERNAME = 'sb333_';  // Your Twitch username
const OAUTH_TOKEN = 'oauth:pkhovn91x9yveb7dmgibqey89rzs2r';  // Your OAuth token (get it from https://twitchapps.com/tmi/)
const CHANNEL = 'hakkimma';  // The Twitch channel you want to join

// Create a client with the necessary options
const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: sb333_,
    password: oauth:pkhovn91x9yveb7dmgibqey89rzs2r
  },
  channels: [ hakkimma ]
});

// Register event handlers
client.on('connected', (address, port) => {
  console.log(`* Connected to ${address}:${port}`);
});

client.on('message', (channel, tags, message, self) => {
  if (self) return; // Ignore messages from the bot itself

  console.log(`${tags['display-name']}: ${message}`);
});

// Connect to Twitch
client.connect().catch(console.error);

// Send a message to the channel
client.on('connected', () => {
  client.say(CHANNEL, 'Hello, Twitch chat!');
});
