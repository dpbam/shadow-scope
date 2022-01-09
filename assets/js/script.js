function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

// monitoring Twitter using API (also live streaming)

const Twit = require('twit')
const nofifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

const apiKey = ''
const apiSecretKey = ''
const accessToken = ''
const accessTokenSecret = ''

var T = new Twit({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

(async () => {
  
})
