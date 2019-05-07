const Roku = require('rokujs');

console.log('finding all Roku devices connected to WiFi network. . .')
Roku.discover( devices => console.log(devices));
