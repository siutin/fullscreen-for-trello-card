console.log("background.js")

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null,{file:'jquery.js',allFrames:false});
  chrome.tabs.executeScript(null,{file:'main.js',allFrames:false});
})
