# Go fucking work

A minimalistic (19 lines of JS) chrome extension that redirects domains like facebook.com or 9gag.com to https://mammuth.github.io/go-fucking-work/ where you will be faced with really motivating phrases.

### How To Use
- Clone the repo
- Go to chrome://extensions and enable developer mode
- Click on Load unpacked extension
- Load the folder `browser-extensions/chrome/src`
- You can also host the redirect page yourself via enabling GitHub repos for your fork and changing `goFuckingWorkURL`.

#### How To Change the Blocked Domains
Just modify the array in `browser-extensions/chrome/src/background.js`

#### Edit Motivational Messages
Modify the array in `index.html`
