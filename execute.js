

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getHTML")
    {
    	console.log("loyz?");
    	var list = $("div.voted");
     	sendResponse({data: list.length });
    	
  	}
    else
      sendResponse({}); // snub them.
});

