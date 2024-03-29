(function() {
  window.messageChecker = window.messageChecker || {};

  messageChecker.Preferences = function() {
    this.settings = {
      options: {
        lastTime: 0,
        pollTime: 10000,
        waitTime: 15,
        notifications: true,
        filters: ''
      }
    }
  };

  messageChecker.Preferences.prototype = {
    get: function(key, cb) {
      chrome.storage.sync.get(this.settings, store => {
        cb(store && store.options ? store.options[key] : this.settings.options[key]);
      });
    },
    set: function(key, val) {
      chrome.storage.sync.get(this.settings, store => {
        store.options[key] = val;
        chrome.storage.sync.set(store);
      });
    }
  };
})();
