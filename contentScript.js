if (!chrome.runtime) {
    // Chrome 20-21
    chrome.runtime = chrome.extension;
} else if(!chrome.runtime.onMessage) {
    // Chrome 22-25
    chrome.runtime.onMessage = chrome.extension.onMessage;
    chrome.runtime.sendMessage = chrome.extension.sendMessage;
    chrome.runtime.onConnect = chrome.extension.onConnect;
    chrome.runtime.connect = chrome.extension.connect;
}

var ajaxResponse="";

window.onload = function() {
	//createIcon();
	sendMessageToBackground();
	ReceiveMessages();
	//buttonClicks();
};


function createIcon(){
var iconDiv = document.createElement('div');
iconDiv.id = "iconDiv";
iconDiv.title = "Drag To Move Position";
iconDiv.style = "visibility: visible; position: fixed; height: 70px; width: 70px; cursor: pointer; top: 340px; left: -35px; right: -50px; z-index: 9999;";

var iconImg = document.createElement('img');
iconImg.src=chrome.extension.getURL("icon_75x75.png");

iconDiv.appendChild(iconImg);

document.body.insertBefore(boxDivCreate(), document.body.firstChild);
document.body.insertBefore(iconDiv, document.body.firstChild);

defaultOffersDisplay();

}

function headerButtons(){

var headerButtonsDiv = document.createElement('div');
headerButtonsDiv.id = "headerButtonsDiv";
headerButtonsDiv.style="display: block !important; padding: 7px 7px 7px 20px; border-bottom: 1px solid rgb(204, 204, 204);";

var hideButton = document.createElement('a');
hideButton.id = "hideButton"
hideButton.style = "display: inline-block !important; border-radius: 10px; font-family: Arial; color: rgb(250, 250, 250); font-size: 1em; padding: 3px 7px 3px 7px; text-decoration: none; background-color: rgba(146, 146, 146, 0.901961);"
hideButton.innerText = "HIDE";

headerButtonsDiv.appendChild(hideButton);

return headerButtonsDiv;

}

function boxDivCreate(){
var boxDiv = document.createElement('div');
boxDiv.id = "boxDiv";
boxDiv.style="visibility: hidden; padding: 4px; padding-left: 8px; max-width:320px; max-height: 400px; border-color: rgb(41, 33, 109); border-radius: 0px 2px 2px 0px; border-width: 1px; position: fixed; top: 200px; left: 0px; z-index: 9999; box-shadow: rgb(203, 203, 203) 0px 0px 7px 3px; overflow-y: scroll; overflow-x: hidden; background: rgb(249, 249, 249);";

var listItems = document.createElement('ul');
listItems.id = "offers_partner_items_ul";
listItems.style = "list-style: none;padding:0px;margin:0px";


boxDiv.appendChild(headerButtons());
boxDiv.appendChild(listItems);

return boxDiv;
}

function boxShow(){
document.getElementById("boxDiv").style.visibility='visible';
document.getElementById("iconDiv").style.visibility='hidden';

}

function boxHide(){
document.getElementById("boxDiv").style.visibility='hidden';
document.getElementById("iconDiv").style.visibility='visible';
}

function buttonClicks(){
$('#iconDiv').on('click',function(){
boxShow();
});
$('#iconDiv').hover(function(){
boxShow();
});
$('#hideButton').on('click',function(){
boxHide();
});
}

function updateListItems(msg){
		var jsonData = JSON.parse(msg);
        return displayItemArray(jsonData.UrlsOfOfferSite);
}

function createStripe(){

	var imgURL = chrome.extension.getURL("icon.png")
	var stripeHtml = '<div id="detailOutWrap"><div id="detailInWrap"><img id="details_logo" src='+imgURL+'><div id="details">Hurray !  Similar products are found in other sites too:)<div class="drop_down" id="compare_now" onmouseover="cancel=true;">COMPARE PRICES<div class="drop_down_symbol"></div><div id="dd_menu"><ul id="offers_partner_items_ul" style="list-style: none; padding: 0px; margin: 0px;height: 400px;overflow-y: scroll;"></ul></div></div><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://chrome.google.com/webstore/detail/nmelombbjhlgkmmmppbmkomnbpcdcfko"> <span class="share-service-icon share-service-icon-facebook yt-sprite"></span></a> <a target="_blank" href="https://twitter.com/intent/tweet?url=https://chrome.google.com/webstore/detail/nmelombbjhlgkmmmppbmkomnbpcdcfko&text=A%20wonderful%20chrome%20extension%20to%20help%20you%20to%20do%20on-line%20purchase%20in%20India%20at%20best%20price.%20I%20have%20tried%20it%20out%20and%20it%20indeed%20saved%20my%20money.&original_referer="> <span class="share-service-icon share-service-icon-twitter yt-sprite"></span></a> <a target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&su=Hey have a look at this extension !!&body=A wonderful chrome extension to help you to do on-line purchase in India at best price. - https://chrome.google.com/webstore/detail/nmelombbjhlgkmmmppbmkomnbpcdcfko&tf=1"> <span class="share-service-icon share-service-icon-mail yt-sprite"></a> <a target="_blank" href="https://plus.google.com/u/0/share?url=https://chrome.google.com/webstore/detail/nmelombbjhlgkmmmppbmkomnbpcdcfko"><span class="share-service-icon share-service-icon-googleplus yt-sprite"></span></a> <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://chrome.google.com/webstore/detail/nmelombbjhlgkmmmppbmkomnbpcdcfko&title=A%20wonderful%20chrome%20extension%20to%20help%20you%20to%20do%20on-line%20purchase%20in%20India%20at%20best%20price.%20I%20have%20tried%20it%20out%20and%20it%20indeed%20saved%20my%20money.%0Ahttps://chrome.google.com/webstore/detail/nmelombbjhlgkmmmppbmkomnbpcdcfko"><span class="share-service-icon share-service-icon-linkedin yt-sprite"></span></a><a href="javascript:void();" id="detailClose" style="margin-left:4px">x</a>'
	
	var stripeDiv = document.createElement('div');
	stripeDiv.className  += "topbar";
	stripeDiv.id= "topbarDiv";
	stripeDiv.innerHTML = stripeHtml;
	
	var bodyTag = document.getElementsByTagName('body')[0];
	bodyTag.parentNode.insertBefore(stripeDiv, bodyTag);
	hideStripeBar();
};

function hideStripeBar(){
$('#detailClose').on('click',function(){
document.getElementById('topbarDiv').style.display = "none";
});
};

function ReceiveMessages(){
    chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
        console.log('onMessage', msg);
        if (msg.from == "background") {
			ajaxResponse = msg.msg;
			displayStripe(ajaxResponse);
        }if (msg.from == "popup") {
            sendResponse({domHtml: document.documentElement.innerHTML, "from":"content", ajaxResponse:ajaxResponse});
        }
    });
}

function displayStripe(ajaxResponse){
if(ajaxResponse && ajaxResponse.statusBool){
var json = JSON.parse(ajaxResponse.responseContent);
if(json.NumberOfOffers > 0){
createStripe();
displayItemArrayFromAjaxResponse(ajaxResponse);
}
			
			}
}

function sendMessageToBackground(){
	var title = document.title;
	chrome.runtime.sendMessage({"domHtml": document.documentElement.outerHTML, "from":"content", "title":title});
}





    