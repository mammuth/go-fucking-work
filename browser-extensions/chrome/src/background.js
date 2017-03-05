var goFuckingWorkURL = "https://mammuth.github.io/go-fucking-work/";

var unprodctiveURLs = [
  "facebook.com",
  "reddit.com",
  "xkcd.com", 
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
