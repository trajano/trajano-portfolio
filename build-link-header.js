// This is meant to be run from phantomjs
var webPage = require('webpage');
var page = webPage.create();
var resourcesRequested = [];
page.onResourceRequested = function (requestData) {
  requestData.url = requestData.url.replace(new RegExp("http://localhost:8080"), "")
  requestData.url = requestData.url.replace(new RegExp("http://trajano.net"), "")
  requestData.url = requestData.url.replace(new RegExp("http://"), "https://")
  if (requestData.url.match(/\.svg$/)) {
    requestData.as = "image"
  }
  if (requestData.url.match(/\.css$/)) {
    requestData.as = "style"
  }
  if (requestData.url == "https://fonts.googleapis.com/icon?family=Material+Icons") {
    requestData.as = "style"
  }
  if (requestData.url.match(/\.png$/)) {
    requestData.as = "image"
  }
  if (requestData.url.match(/\.jpg$/)) {
    requestData.as = "image"
  }
  if (requestData.url.match(/\.js$/)) {
    requestData.as = "script"
  }
  if (requestData.url.match(/\.ttf(\?.*)?$/)) {
    requestData.as = "font"
  }
  if (requestData.url != '/' && !requestData.url.match(/&/)) {
    resourcesRequested.push(requestData);
  }
};
page.open('http://localhost:8080', function (status) {
  var s = ""
  resourcesRequested.forEach(function (resource, i) {
    s += ("<" + resource.url + ">;rel=preload;as=" + resource.as)
    if (i < resourcesRequested.length - 1) {
      s += (",")
    }
    console.log("<link rel=\"preload\" href=\"" + resource.url + "\" as=\"" + resource.as + "\">")
  })
  //  console.log("Header add Link " + s)
  phantom.exit();
});
