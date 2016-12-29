var parsingRules = [{
		urlRegexContains: ".*amazon.*dp.*",
		titleContainsArray: ["Amazon.in: Grocery & Gourmet Foods"],
		productName: {
			"htmlId": "#productTitle",
			"objectKey": "innerText"
		},
		productBrandName: {
			"htmlId": "",
			"objectKey": "innerText"
		},
		productMrpPrice: {
			"htmlId": "#dpv2_redesign_strikeprice_and_savings_row",
			"objectKey": "innerText"
		},
		productOfferPrice: {
			"htmlId": "#dpv2_redesign_priceblock_priceToPay,#priceblock_saleprice",
			"objectKey": "innerText"
		},
		productDealPrice: {
			"htmlId": "#priceblock_dealprice",
			"objectKey": "innerText"
		},
		productImage: {
			"htmlId": "#landingImage",
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
		PartnerName: "Amazon"
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

function parseSite(url, title, domHtml) {
	for (var i = 0; i < parsingRules.length; i++) {
		if (urlMatch(url, parsingRules[i].urlRegexContains) && titleMatch(title, parsingRules[i].titleContainsArray) && matchOtherRules(domHtml, parsingRules[i].otherRules)) {
			var productName = getElementByXpath(domHtml, parsingRules[i].productName);
			if (productName === null)
				return null;

			var productDbId = getElementByXpath(domHtml, parsingRules[i].productDbId);
			if (productDbId === null)
				return null;

			var productUrlId = getElementByXpath(domHtml, parsingRules[i].productUrlId);
			if (productUrlId === null)
				return null;

			var productMrpPrice = getElementByXpath(domHtml, parsingRules[i].productMrpPrice);
			var productOfferPrice = getElementByXpath(domHtml, parsingRules[i].productOfferPrice);
			var productDealPrice = getElementByXpath(domHtml, parsingRules[i].productDealPrice);
			var productImage = getElementByXpath(domHtml, parsingRules[i].productImage);
			var productBrandName = getElementByXpath(domHtml, parsingRules[i].productBrandName);

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
		var elementValue = element[0][htmlAttribute];
		if (elementValue) {
			elementValue = elementValue.trim();
			elementValue = elementValue.replace(/(\r\n|\n|\r)/gm, "");
			return elementValue;
		}
	}
	return null;
}

function getElementByXpath(domHtml, elementObject) {
	if(!elementObject)
	return null;
	return getValueByXpath(domHtml, elementObject.htmlId, elementObject.objectKey);
}
