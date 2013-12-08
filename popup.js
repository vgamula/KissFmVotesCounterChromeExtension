

chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendRequest(tab.id, {method: "getHTML"}, function(response) {
    console.log(response.data);
    $(".span1").text(response.data);
    chrome.browserAction.setBadgeText({text: response.data+''});
  });
});



