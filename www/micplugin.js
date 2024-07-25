// Empty constructor
function MicPlugin() {}

MicPlugin.prototype.request = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'MicPlugin', 'request', [options]);
}

// Installation constructor that binds MicPlugin to window
MicPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.micPlugin = new MicPlugin();
  return window.plugins.micPlugin;
};
cordova.addConstructor(MicPlugin.install);