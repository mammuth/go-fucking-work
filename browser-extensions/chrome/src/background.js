var goFuckingWorkURL = "https://mammuth.github.io/go-fucking-work/";

var unprodctiveURLs = [
  "xkcd.com", 
  "heise.de",
  "feedly.com",
  "facebook.com",
  "twitter.com",
  "reddit.com",
]

chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
    if (new RegExp(unprodctiveURLs.join("|")).test(request.url)) {
      return { redirectUrl : request.url = goFuckingWorkURL };
    }
  },
  {
    urls : ["<all_urls>"]
  },
  ["blocking"]
);
