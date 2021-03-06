function getCurrentTabUrl(callback) {  
  var queryInfo = {
    active: true, 
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0]; 
    var url = tab.url;
    callback(url);
  });
}

function sendMessageToContent(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    console.log(tab.url, tab.title);
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {from: "popup"}, function(msg) {
			if(msg && msg.ajaxResponse)	{
						displayItemArrayFromAjaxResponse(msg.ajaxResponse);
			}
        });
    });
});
}

document.addEventListener('DOMContentLoaded', function() {
  defaultOffersDisplay();
  sendMessageToContent();
  $( "#tabs" ).tabs();
  appVersionNumber();
});

function appVersionNumber(){
	var manifestData = chrome.runtime.getManifest();
	document.getElementById('appVersionNumber').innerHTML = "Version : " + manifestData.version;
}


