(function() {
  function err() {
    console.error(arguments);
  }

  navigator.webkitGetUserMedia({video: true}, function(localMediaStream) {

    window.mediaStream = localMediaStream;
    window.mediaStreamURL = window.URL.createObjectURL(localMediaStream);
  }, err);
})();

