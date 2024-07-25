// Empty constructor
function MicPlugin() {}

MicPlugin.prototype.request = function(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'MicPlugin', 'request');
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