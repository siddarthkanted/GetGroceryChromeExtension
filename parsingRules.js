var parsingRules = [{
		urlRegexContains: ".*amazon.*dp.*|.*amazon.*product.*",
		titleContainsArray: ["Amazon.in"],
		productName: {
			"htmlId": "#productTitle",
			"objectKey": "innerText"
		},
		productBrandName: {
			"htmlId": "#brand",
			"objectKey": "innerText"
		},
		productMrpPrice: {
			"htmlId": "#dpv2_redesign_strikeprice_and_savings_row,strike[id='priceblock_ourprice'],span[class='a-text-strike']",
			"objectKey": "innerText"
		},
		productOfferPrice: {
			"htmlId": "#dpv2_redesign_priceblock_priceToPay,#priceblock_saleprice,span[id='priceblock_ourprice']",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "#priceblock_dealprice",
			"objectKey": "innerText"
		},
		productImage: {
			"htmlId": "img[id='landingImage']",
			"objectKey": "src"
		},
		productDbId: {
			"htmlId": "#ASIN",
			"objectKey": "value"
		},
		productUrlId: {
			"htmlId": "#ASIN",
			"objectKey": "value"
		},
		productRatingString: {
			"htmlId": "div[id='avgRating']",
			"objectKey": "innerText"
		},
		productReviewString: {
			"htmlId": "span[id='acrCustomerReviewText']",
			"objectKey": "innerText"
		},
		PartnerName: "Amazon"
	},
		
	{
		//http://www.bigbasket.com/pd/267054/dettol-bathing-soap-original-75-gm/
		urlRegexContains: ".*bigbasket.*/pd/.*",
		titleContainsArray: [""],
		//<h1> Dettol Bathing Soap - Original, 75 gm ( Pack of 3 ) </h1>
		productName: {
			"htmlId": "h1",
			"objectKey": "innerText"
		},
		//<div class="uiv2-brand-name"><a href="/pb/dettol/"> DETTOL </a></div>
		productBrandName: {
			"htmlId": "div[class='uiv2-brand-name']",
			"objectKey": "innerText"
		},
		//<span id="uiv2-mrp"><hr>MRP: Rs. 79.00</span>
		productMrpPrice: {
			"htmlId": "span[id='uiv2-mrp']",
			"objectKey": "innerText"
		},
		//<div class="uiv2-price" itemprop="price"> Rs. 75.05</div>
		productOfferPrice: {
			"htmlId": "div[class='uiv2-price']",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img itemprop="image"
		productImage: {
			"htmlId": "img[itemprop='image']",
			"objectKey": "src"
		},
		//<input type="hidden" id="id-product-id" value="267054">
		productDbId: {
			"htmlId": "input[id='id-product-id']",
			"objectKey": "value"
		},
		productUrlId: {
			"htmlId": "input[id='id-product-id']",
			"objectKey": "value",
		},
		PartnerName: "BigBasket"
	},
	
		{
		urlRegexContains: ".*mymorestore.*p.php",
		titleContainsArray: [""],
		//h1 itemprop="name"
		productName: {
			"htmlId": "h1[itemprop='name']",
			"objectKey": "innerText"
		},
		//<span itemprop="name">Himalaya</span>
		productBrandName: {
			"htmlId": "span[itemprop='name']",
			"objectKey": "innerText"
		},
		//<span class="js-mrp">50.00</span>
		productMrpPrice: {
			"htmlId": "span[class='js-mrp']",
			"objectKey": "innerText"
		},
		//<h2 class="finalPrice">? 169.50</h2>
		productOfferPrice: {
			"htmlId": "h2[class='finalPrice']",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img class="js-item-image" itemprop="image" src="https://p2.mymorestore.com/images/products/320/terzo-window-wiper-86-gm-3381-v-1-pc.png" alt="Terzo Window Wiper 86 Gm 3381 1 pc">
		productImage: {
			"htmlId": "img[itemprop='image']",
			"objectKey": "src"
		},
		//<div class="itemLeft jsProduct" data-status="ENABLED" data-display="detail" data-item-id="12521" 
		//$(domHtml).find("div[class='itemLeft jsProduct']")[0]['attributes']["data-item-id"]['nodeValue']
		//<meta itemprop="productId" content="10004935">
		productDbId: {
			"htmlId": "meta[itemprop='productId']",
			"objectKey": "content"
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "",
			"urlReplace": "https://www.mymorestore.com/"
		},
		PartnerName: "MyMoreStore"
	},
	
	{
		urlRegexContains: ".*zopnow.*p.php",
		titleContainsArray: [""],
		//h1 itemprop="name"
		productName: {
			"htmlId": "h1[itemprop='name']",
			"objectKey": "innerText"
		},
		//<span itemprop="name">Himalaya</span>
		productBrandName: {
			"htmlId": "span[itemprop='name']",
			"objectKey": "innerText"
		},
		//<span class="js-mrp">50.00</span>
		productMrpPrice: {
			"htmlId": "span[class='js-mrp']",
			"objectKey": "innerText"
		},
		//<h2 class="finalPrice">₹ 169.50</h2>
		productOfferPrice: {
			"htmlId": "h2[class='finalPrice']",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img class="js-item-image" itemprop="image" src="https://p2.zopnow.com/images/products/320/terzo-window-wiper-86-gm-3381-v-1-pc.png" alt="Terzo Window Wiper 86 Gm 3381 1 pc">
		productImage: {
			"htmlId": "img[itemprop='image']",
			"objectKey": "src"
		},
		//<div class="itemLeft jsProduct" data-status="ENABLED" data-display="detail" data-item-id="12521" 
		//$(domHtml).find("div[class='itemLeft jsProduct']")[0]['attributes']["data-item-id"]['nodeValue']
		//<meta itemprop="productId" content="10004935">
		productDbId: {
			"htmlId": "meta[itemprop='productId']",
			"objectKey": "content"
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "",
			"urlReplace": "https://www.zopnow.com/"
		},
		PartnerName: "ZopNow"
	},
	
	{
	//https://www.sparindia.com/en/Beauty-%26Personal-Care/Hair-Care/Hair-Oils//p/114516961
		urlRegexContains: ".*reliancefreshdirect.*",
		titleContainsArray: [""],
		//<span id="itemName">Red Label Tea 250 gm</span>
		productName: {
			"htmlId": "span[id='itemName']",
			"objectKey": "innerText"
		},
		//<span itemprop="name">Himalaya</span>
		productBrandName: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<span class="js-mrp">50.00</span>
		productMrpPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<h2 class="finalPrice">₹ 169.50</h2>
		productOfferPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img class="js-item-image" itemprop="image" src="https://p2.zopnow.com/images/products/320/terzo-window-wiper-86-gm-3381-v-1-pc.png" alt="Terzo Window Wiper 86 Gm 3381 1 pc">
		productImage: {
			"htmlId": "",
			"objectKey": "src"
		},
		//<div class="itemLeft jsProduct" data-status="ENABLED" data-display="detail" data-item-id="12521" 
		//$(domHtml).find("div[class='itemLeft jsProduct']")[0]['attributes']["data-item-id"]['nodeValue']
		//<meta itemprop="productId" content="10004935">
		productDbId: {
			"htmlId": "",
			"objectKey": "content"
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "",
			"urlReplace": "https://www.zopnow.com/"
		},
		PartnerName: "Reliance Fresh Direct"
	},
	
	
		{
	//https://www.sparindia.com/en/Beauty-%26Personal-Care/Hair-Care/Hair-Oils//p/114516961
		urlRegexContains: ".*sparindia.*/p/.*",
		titleContainsArray: [""],
		//h1 <span id="ctl00_MainContentPlaceHolder_dvxProduct1_ctrl0_lblItemName">Sunsolite Sunflower Oil 5 ltr</span>
		productName: {
			"htmlId": "h4",
			"objectKey": "innerText"
		},
		//<span itemprop="name">Himalaya</span>
		productBrandName: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<span class="js-mrp">50.00</span>
		productMrpPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<h2 class="finalPrice">₹ 169.50</h2>
		productOfferPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img class="js-item-image" itemprop="image" src="https://p2.zopnow.com/images/products/320/terzo-window-wiper-86-gm-3381-v-1-pc.png" alt="Terzo Window Wiper 86 Gm 3381 1 pc">
		productImage: {
			"htmlId": "",
			"objectKey": "src"
		},
		//<div class="itemLeft jsProduct" data-status="ENABLED" data-display="detail" data-item-id="12521" 
		//$(domHtml).find("div[class='itemLeft jsProduct']")[0]['attributes']["data-item-id"]['nodeValue']
		//<meta itemprop="productId" content="10004935">
		productDbId: {
			"htmlId": "",
			"objectKey": "content"
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "",
			"urlReplace": "https://www.zopnow.com/"
		},
		PartnerName: "Spar"
	},
	
	{
	//http://www.zip.in/quaker-oats-strawberry-flavour-with-apple-40-gm-pouch
		urlRegexContains: ".*www[.]zip[.]in.*",
		titleContainsArray: [""],
		//h1 <span id="ctl00_MainContentPlaceHolder_dvxProduct1_ctrl0_lblItemName">Sunsolite Sunflower Oil 5 ltr</span>
		productName: {
			"htmlId": "h1",
			"objectKey": "innerText"
		},
		//<span itemprop="name">Himalaya</span>
		productBrandName: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<span class="js-mrp">50.00</span>
		productMrpPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<h2 class="finalPrice">₹ 169.50</h2>
		productOfferPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img class="js-item-image" itemprop="image" src="https://p2.zopnow.com/images/products/320/terzo-window-wiper-86-gm-3381-v-1-pc.png" alt="Terzo Window Wiper 86 Gm 3381 1 pc">
		productImage: {
			"htmlId": "",
			"objectKey": "src"
		},
		//<div class="itemLeft jsProduct" data-status="ENABLED" data-display="detail" data-item-id="12521" 
		//$(domHtml).find("div[class='itemLeft jsProduct']")[0]['attributes']["data-item-id"]['nodeValue']
		//<meta itemprop="productId" content="10004935">
		productDbId: {
			"htmlId": "",
			"objectKey": "content"
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "",
			"urlReplace": "https://www.zopnow.com/"
		},
		PartnerName: "ZipIn"
	},
	
	{
	//http://www.spencers.in/household.html
		urlRegexContains: ".*www[.]spencers[.]in.*",
		titleContainsArray: [""],
		//h1 <span id="ctl00_MainContentPlaceHolder_dvxProduct1_ctrl0_lblItemName">Sunsolite Sunflower Oil 5 ltr</span>
		productName: {
			"htmlId": "h1",
			"objectKey": "innerText"
		},
		//<span itemprop="name">Himalaya</span>
		productBrandName: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<span class="js-mrp">50.00</span>
		productMrpPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<h2 class="finalPrice">₹ 169.50</h2>
		productOfferPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img class="js-item-image" itemprop="image" src="https://p2.zopnow.com/images/products/320/terzo-window-wiper-86-gm-3381-v-1-pc.png" alt="Terzo Window Wiper 86 Gm 3381 1 pc">
		productImage: {
			"htmlId": "",
			"objectKey": "src"
		},
		//<div class="itemLeft jsProduct" data-status="ENABLED" data-display="detail" data-item-id="12521" 
		//$(domHtml).find("div[class='itemLeft jsProduct']")[0]['attributes']["data-item-id"]['nodeValue']
		//<meta itemprop="productId" content="10004935">
		productDbId: {
			"htmlId": "",
			"objectKey": "content"
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "",
			"urlReplace": "https://www.zopnow.com/"
		},
		PartnerName: "Spencers"
	},
	
	{
	//https://www.heritagefreshonline.com/ItemDescription/Sunsolite-Sunflower-Oil-5-ltr
		urlRegexContains: ".*heritagefreshonline.*ItemDescription.*",
		titleContainsArray: [""],
		//h1 <span id="ctl00_MainContentPlaceHolder_dvxProduct1_ctrl0_lblItemName">Sunsolite Sunflower Oil 5 ltr</span>
		productName: {
			"htmlId": "span[id='ctl00_MainContentPlaceHolder_dvxProduct1_ctrl0_lblItemName']",
			"objectKey": "innerText"
		},
		//<span itemprop="name">Himalaya</span>
		productBrandName: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<span class="js-mrp">50.00</span>
		productMrpPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<h2 class="finalPrice">₹ 169.50</h2>
		productOfferPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img class="js-item-image" itemprop="image" src="https://p2.zopnow.com/images/products/320/terzo-window-wiper-86-gm-3381-v-1-pc.png" alt="Terzo Window Wiper 86 Gm 3381 1 pc">
		productImage: {
			"htmlId": "",
			"objectKey": "src"
		},
		//<div class="itemLeft jsProduct" data-status="ENABLED" data-display="detail" data-item-id="12521" 
		//$(domHtml).find("div[class='itemLeft jsProduct']")[0]['attributes']["data-item-id"]['nodeValue']
		//<meta itemprop="productId" content="10004935">
		productDbId: {
			"htmlId": "",
			"objectKey": "content"
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "",
			"urlReplace": "https://www.zopnow.com/"
		},
		PartnerName: "Heritage Fresh"
	},
	
	{
		urlRegexContains: ".*snapdeal.*/product/.*/[0-9]*.*",
		titleContainsArray: ["Snapdeal"],
		productName: {
			"htmlId": "h1[class='pdp-e-i-head']",
			"objectKey": "innerText"
		},
		//<input type="hidden" value="Dettol" id="brandName">
		productBrandName: {
			"htmlId": "input[id='brandName']",
			"objectKey": "value"
		},
		productMrpPrice: {
			"htmlId": "div[class='pdpCutPrice'],span[class='payBlkBig']",
			"objectKey": "innerText"
		},
		productOfferPrice: {
			"htmlId": "span[itemprop='price']",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		productImage: {
			"htmlId": "img[itemprop='image']",
			"objectKey": "src"
		},
		productDbId: {
			"htmlId": "#productId",
			"objectKey": "value",
			"urlParameter": ""
		},
		productUrlId: {
			"htmlId": "#productId",
			"objectKey": "value",
			"urlParameter": ""
		},
		//<span class="hidden" itemprop="ratingValue">3.4</span>
		productRatingString: {
			"htmlId": "span[itemprop='ratingValue']",
			"objectKey": "innerText"
		},
		//<span class="total-rating showRatingTooltip">78 Ratings</span>
		productTotalRatingString: {
			"htmlId": "span[class='total-rating showRatingTooltip']",
			"objectKey": "innerText"
		},
		//<span class="numbr-review">9 Reviews</a></span>
		productReviewString: {
			"htmlId": "span[class='numbr-review']",
			"objectKey": "innerText"
		},
		//<input id="offersList" type="hidden" value=";:;Get 5% instant discount + 10X rewards using Snapdeal HDFC Bank Credit Card">
			productOfferString: {
			"htmlId": "input[id='offersList']",
			"objectKey": "value"
		},
		PartnerName: "Snapdeal"
	}
];

function matchOtherRules(domHtml, otherRules) {
	if(!otherRules) return true;
	for (var i = 0; i < otherRules.length; i++) {
		var valueString = getValueByXpath(domHtml, otherRules[i].htmlId, otherRules[i].objectKey);
		if (valueString.indexOf(otherRules[i].containString) === -1) {
			return false;
		}
	}
	return true;
}

function getBrandName(domHtml, elementObject, productName){
	var productBrandName = getElementByXpath(domHtml, elementObject);
	if(productBrandName) {
		if(elementObject.containString){
			return productBrandName.replace(elementObject.containString, "");
		}else{
		return productBrandName;
		}
	}
	return null;
}

var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

function getProductId(domHtml, elementObject, url){
if(elementObject.htmlId){
return getElementByXpath(domHtml, elementObject);
}
if(elementObject.urlParameter){
return getQueryString(elementObject.urlParameter, url);
}
if(elementObject.urlReplace){
var href = url ? url : window.location.href;
return href.replace(elementObject.urlReplace, "");
}
return null;
}

function parseSite(url, title, domHtml) {
	for (var i = 0; i < parsingRules.length; i++) {
		if (urlMatch(url, parsingRules[i].urlRegexContains) && titleMatch(title, parsingRules[i].titleContainsArray) && matchOtherRules(domHtml, parsingRules[i].otherRules)) {
			
			var productName = getElementByXpath(domHtml, parsingRules[i].productName);
			if (productName === null)
				return null;
			
			var productBrandName = getBrandName(domHtml, parsingRules[i].productBrandName, productName);
			var productDbId = getProductId(domHtml, parsingRules[i].productDbId, url);
			var productUrlId = getProductId(domHtml, parsingRules[i].productUrlId, url);
			var productMrpPrice = getElementByXpath(domHtml, parsingRules[i].productMrpPrice);
			var productOfferPrice = getElementByXpath(domHtml, parsingRules[i].productOfferPrice);
			var productDealPrice = getElementByXpath(domHtml, parsingRules[i].productDealPrice);
			var productImage = getElementByXpath(domHtml, parsingRules[i].productImage);
			if(productImage){
			productImage = productImage.replace("chrome-extension", "http");
			}
			
			var RatingString = getElementByXpath(domHtml, parsingRules[i].productRatingString);
			var TotalRatingString = getElementByXpath(domHtml, parsingRules[i].productTotalRatingString);
			var ReviewString = getElementByXpath(domHtml, parsingRules[i].productReviewString);
			var OfferString = getElementByXpath(domHtml, parsingRules[i].productOfferString);
			OfferString = OfferString.replace(";:;", "").replace(" + ", "\n");
			var ReviewRatingString = "";
			
			if(RatingString)
			  ReviewRatingString = RatingString;
			 
			if(TotalRatingString)
			ReviewRatingString +=" & "+TotalRatingString;
			  
			if(ReviewString)  
			ReviewRatingString +=" & "+ReviewString;
			
			var productMetadata = {
				ProductName: productName,
				ProductDbId: productDbId,
				ProductUrlId: productUrlId,
				ProductMrpPrice: productMrpPrice,
				ProductOfferPrice: productOfferPrice,
				ProductDealPrice: productDealPrice,
				ProductImage: productImage,
				ProductBrandName: productBrandName,
				PartnerName: parsingRules[i].PartnerName,
				Link: url,
				ReviewRatingString:ReviewRatingString,
				OfferString:OfferString,
			}

			return productMetadata;
		}

	}
	return null;
}

function titleMatch(title, titleContainsArray) {
	for (var i = 0; i < titleContainsArray.length; i++) {
		if (title.indexOf(titleContainsArray) !== -1) {
			return true;
		}
	}
	return false;
}

function urlMatch(urlString, urlRegex) {
	var urlRegexContains = new RegExp(urlRegex);
	if (urlRegexContains.test(urlString)) {
		return true;
	} else {
		return false;
	}
}

function getValueByXpath(domHtml, htmlId, htmlAttribute) {
	if(!domHtml || !htmlId || !htmlAttribute)
	return null;
	var element = $(domHtml).find(htmlId);
	if (element[0] != null) {
		var elementValue = getAttributeByXpath(element, htmlAttribute);
		if (elementValue) {
			elementValue = elementValue.trim();
			elementValue = elementValue.replace(/(\r\n|\n|\r)/gm, "");
			elementValue = elementValue.replace(/(MRP:|,|MRP|Rs[.]|Rs|₹)/gm, "");
			elementValue = elementValue.trim();
			return elementValue;
		}
	}
	return null;
}

function getAttributeByXpath(elementArray, htmlAttribute){
	if(htmlAttribute instanceof Array){
		var elementObject = elementArray[0];
		for(var i=0;i<htmlAttribute.length;i++){
		elementObject=elementObject[htmlAttribute[i]];
		}
		return elementObject;
	}else{
		return elementArray[0][htmlAttribute];
	}
}

function getElementByXpath(domHtml, elementObject) {
	if(!elementObject)
	return null;
	return getValueByXpath(domHtml, elementObject.htmlId, elementObject.objectKey);
}
