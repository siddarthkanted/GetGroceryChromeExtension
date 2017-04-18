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
		//<div class="histoRowfive" title="52% of reviews have 5 stars">
		productFiveStarString: {
			"htmlId": "div[class='histoRowfive']",
			"objectKey": "title"
		},
		//<div class="histoRowfour" title="31% of reviews have 4 stars">
		productFourStarString: {
			"htmlId": "div[class='histoRowfour']",
			"objectKey": "title"
		},
		//<div class="histoRowthree" title="7% of reviews have 3 stars">
		productThreeStarString: {
			"htmlId": "div[class='histoRowthree']",
			"objectKey": "title"
		},
		//<div class="histoRowtwo" title="4% of reviews have 2 stars">
		productTwoStarString: {
			"htmlId": "div[class='histoRowtwo']",
			"objectKey": "title"
		},
		//<div class="histoRowone" title="6% of reviews have 1 stars">
		productOneStarString: {
			"htmlId": "div[class='histoRowone']",
			"objectKey": "title"
		},
		//<a id="askATFLink" class="a-link-normal askATFLink" href="#Ask">
		productQuestionAsked: {
			"htmlId": "a[id='askATFLink']",
			"objectKey": "innerText"
		},
		
		PartnerName: "Amazon"
	},
	
		{
		//<input type="hidden" autocomplete="off" name="href" value="http://www.infibeam.com/SDP.action?catalogId=P-moac-62472505403-cat">
		urlRegexContains: ".*infibeam.*P-.*-[0-9]*-cat-z.html",
		titleContainsArray: [""],
		//<h1 class="product-title-small " itemprop="name">Portronics Sublime III Bluetooth Speaker (with microSD/FM/Aux/Alarm) - Black</h1>
		productName: {
			"htmlId": "h1[itemprop='name']",
			"objectKey": "innerText"
		},
		//<meta itemprop="brand" content="Philips">
		productBrandName: {
			"htmlId": "meta[itemprop='brand']",
			"objectKey": "content"
		},
		//<span class="price linethrough">1,999</span>
		productMrpPrice: {
			"htmlId": "span[class='price linethrough']",
			"objectKey": "innerText"
		},
		//<span class="currentPrice"><span style="font-family: rupee">R </span>1303</span>
		productOfferPrice: {
			"htmlId": "span[class='currentPrice']",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		//<img itemprop="image"
		productImage: {
			"htmlId": "img[class='zoomImg']",
			"objectKey": "src"
		},
		//<div class="row h_container pm-select active" data-priority="1" data-listing-id="P-poel-71226981994">
		productDbId: {
			"htmlId": "",
			"objectKey": "value",
			"urlPosition": 3
		},
		productUrlId: {
			"htmlId": "",
			"objectKey": "value",
			"urlPosition": 3
		},
		//<ul class="key-features-ul clearfix" id="double">
		productDescription: {
			"htmlId": "div[class='key-features']",
			"objectKey": "innerText"
		},
		//<span class="rating-star">
		productTotalRatingString: {
			"htmlId": "span[class='rating-star']",
			"objectKey": "alt",
			"extraString": " total"
		},
		//<a class="review-count right-margin" href="#reviews-detail">7<span class="review-gap">Buyer Reviews</span></a>
		productReviewString: {
			"htmlId": "a[href='#reviews-detail']",
			"objectKey": "innerText",
			"isReplaceRequired":false
		},
		//<meta itemprop="ratingCount" content="8">
			productRatingString: {
			"htmlId": "meta[itemprop='ratingCount']",
			"objectKey": "content",
			"extraString": " Ratings"
		},
		
		//<li class="offer ui-promotion">
			productOfferString: {
			"htmlId": "li[class='offer ui-promotion']",
			"objectKey": "innerText"
		},
		
		PartnerName: "Infibeam"
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
			"urlPosition": 1
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
			"urlPosition": 1
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
		productEmiPrice: {
			"htmlId": "span[class='emi-price']",
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
			"objectKey": "innerText",
			"extraString": " average rating"
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
		//<div class="spec-body p-keyfeatures">
		productDescription: {
			"htmlId": "li[class='col-xs-8 dtls-li']",
			"objectKey": "innerText"
		},
		//<span id="recommend-section" class="recommend-rating padL10"> 
		productRecommendString: {
			"htmlId": "span[id='recommend-section']",
			"objectKey": "innerText",
			"extraString": " recommend this product"
		},
		//<div class="recom-subtext">Based on 600 Recommendations.</div>
		productRecommendTotalString: {
			"htmlId": "div[class='recom-subtext']",
			"objectKey": "innerText",
			"extraString": " average rating"
		},
		//<span class="numbr-selfie">
		productNumberSelfieString: {
			"htmlId": "span[class='numbr-selfie']",
			"objectKey": "innerText",
		},
		//  <input type="hidden" value="42" id="qnaNoOfQuestions" name="qnaNoOfQuestions" class="sectionCount">
		productQuestionAsked: {
			"htmlId": "input[id='qnaNoOfQuestions']",
			"objectKey": "value",
			"extraString": " Questions asked"
		},
		//<input type="hidden" value="34" id="qnaNoOfAnswers" name="qnaNoOfAnswers">
		productQuestionAnswered: {
			"htmlId": "input[id='qnaNoOfAnswers']",
			"objectKey": "value",
			"extraString": " Questions answered"
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
if(elementObject.urlPosition != null){
var href = url ? url : window.location.href;
var parser = document.createElement('a');
parser.href = href;
return parser.pathname.split('/')[elementObject.urlPosition];
}
return null;
}

function reviewStringCreator(domHtml, attributeData, reviewString, concatenator){
			if(!attributeData)
			return reviewString;
			
			var dataString = getElementByXpath(domHtml, attributeData);
			var extraString = attributeData.extraString?attributeData.extraString:"";
			if(dataString)
			reviewString +=dataString+extraString+concatenator;
			return reviewString;
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
			
			var productDescription = getElementsByXpath(domHtml, parsingRules[i].productDescription);
			productDescription = description(productDescription);
			
			
			//reviews
			var ReviewRatingString = "";
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productRatingString, ReviewRatingString, "\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productTotalRatingString, ReviewRatingString,"\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productReviewString, ReviewRatingString,"\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productFiveStarString, ReviewRatingString,"\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productFourStarString, ReviewRatingString,"\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productThreeStarString, ReviewRatingString,"\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productTwoStarString, ReviewRatingString,"\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productOneStarString, ReviewRatingString,"\n");
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productQuestionAsked, ReviewRatingString,"\n");	
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productQuestionAnswered, ReviewRatingString,"\n");	
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productRecommendString, ReviewRatingString,"\n");				
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productRecommendTotalString, ReviewRatingString,"\n");	
			ReviewRatingString = reviewStringCreator(domHtml, parsingRules[i].productNumberSelfieString, ReviewRatingString,"\n");				
						
			var OfferString = "";
			OfferString = reviewStringCreator(domHtml, parsingRules[i].productOfferString, OfferString, "\n");
			OfferString = reviewStringCreator(domHtml, parsingRules[i].productEmiPrice, OfferString, "\n");
			if(OfferString)
				OfferString = OfferString.replace(";:;", "").replace(" + ", "\n");
			
			
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
				ReviewRatingString:ReviewRatingString.trim(),
				OfferString:OfferString.trim(),
				ProductDescription:productDescription,
			}

			return productMetadata;
		}

	}
	return null;
}

function description(description){
if(!description)
	return null;
 var descriptionString = "";
 for (var i = 0; i < description.length; i++) {
     descriptionString += description[i].trim() + "\n";
 }
 return descriptionString.trim();
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

function getValueByXpath(domHtml, htmlId, htmlAttribute, isReplaceRequired = true) {
	if(!domHtml || !htmlId || !htmlAttribute)
	return null;
	var element = $(domHtml).find(htmlId);
	if (element[0] != null) {
		var elementValue = getAttributeByXpath(element, htmlAttribute);
		if (elementValue) {
			elementValue = elementValue.trim();
			elementValue = elementValue.replace(/(\r\n|\n|\r)/gm, "");
			if(isReplaceRequired){
						elementValue = elementValue.replace(/(MRP:|,|MRP|Rs[.]|Rs|₹|R)/gm, "");
			}
			elementValue = elementValue.trim();
			return elementValue;
		}
	}
	return null;
}

function getElementsByXpath(domHtml, elementObject){
if(!elementObject)
	return null;
	var elements = $(domHtml).find(elementObject.htmlId);
	var elementAttributeArray = [];
	if (elements != null) {
		for(var i=0;i<elements.length;i++){
		element=elements[i];
		elementAttributeArray.push(element[elementObject.objectKey]);
		}
	}
	return elementAttributeArray;
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
	if(elementObject.isReplaceRequired != null){
	return getValueByXpath(domHtml, elementObject.htmlId, elementObject.objectKey, elementObject.isReplaceRequired);
	}
	return getValueByXpath(domHtml, elementObject.htmlId, elementObject.objectKey);
}
