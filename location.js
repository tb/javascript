$.fn.hashId = function(regex) {
  var matches = window.location.hash.match(regex);

  if (matches) {
    return matches[1];
  } else {
    return null;
  }
}
