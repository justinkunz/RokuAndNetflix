# Roku & Netflix - Automatic Show Player

This Node app will turn on a specified Roku Smart TV, load Netflix and play a random episode of a specified TV show on Netflix

## What you need

- NodeJs
- A Roku Smart TV
- Netflix App (with logged in Netflix account)

## Set Up

To use this on your device:

1. Run `node discover.js` to view the IP Addresses for all Roku devices on your WiFi Network
2. Replace `[ROKU IP HERE]` on line 2 of **playShow.js** with the IP address of the Roku device you'd like to use
3. By default, this script will play a random episode of _The Office_. To change this to the show of your choice, change line 3 of **playShow.js**

## How it works

The script works by sending commands to your Smart TV that are interrupted the same way your Tv interrepts commands from your remote. These commands navigate though Netflix and play a random episode of the specified show.
