var objectHelper = require('./object');

function redirect(url) {
  window.location = url;
}

function getDocument() {
  return window.document;
}

function getWindow() {
  return window;
}

function getOrigin() {
  var location = window.location;
  var origin = location.origin;
  if (!origin) {
    origin = objectHelper.getOriginFromUrl(location.href);
  }
  return origin;
}

module.exports = {
  redirect: redirect,
  getDocument: getDocument,
  getWindow: getWindow,
  getOrigin: getOrigin
};