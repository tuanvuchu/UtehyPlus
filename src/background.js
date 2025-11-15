chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.remove("autoLogin");
});
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.remove("autoLogin");
});
