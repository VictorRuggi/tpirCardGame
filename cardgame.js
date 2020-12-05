function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function init(){
	range = (Math.floor(Math.random() * 5)) * 1000 + 1000; /*Range is between 1000 and 5000*/
	carValue = (15000 + Math.floor(Math.random() * 8 * 1000)); /*Car Value is between [15000, 23000[ */
	startValue = 15000; /*Car price starts at $15,000*/
	cards = [ {name: "two", value: 2}, {name: "two", value: 2}, {name: "two", value: 2}, {name: "two", value: 2},
			{name: "three", value: 3}, {name: "three", value: 3}, {name: "three", value: 3}, {name: "three", value: 3},
			{name: "four", value: 4}, {name: "four", value: 4}, {name: "four", value: 4}, {name: "four", value: 4},
			{name: "five", value: 5}, {name: "five", value: 5}, {name: "five", value: 5}, {name: "five", value: 5},
			{name: "six", value: 6}, {name: "six", value: 6}, {name: "six", value: 6}, {name: "six", value: 6},
			{name: "seven", value: 7}, {name: "seven", value: 7}, {name: "seven", value: 7}, {name: "seven", value: 7},
			{name: "eight", value: 8}, {name: "eight", value: 8}, {name: "eight", value: 8}, {name: "eight", value: 8},
			{name: "nine", value: 9}, {name: "nine", value: 9}, {name: "nine", value: 9}, {name: "nine", value: 9},
			{name: "ten", value: 10}, {name: "ten", value: 10}, {name: "ten", value: 10}, {name: "ten", value: 10},
			{name: "king", value: 10}, {name: "king", value: 10}, {name: "king", value: 10}, {name: "king", value: 10},
			{name: "jack", value: 10}, {name: "jack", value: 10}, {name: "jack", value: 10}, {name: "jack", value: 10},
			{name: "queen", value: 10}, {name: "queen", value: 10}, {name: "queen", value: 10}, {name: "queen", value: 10},
			{name: "ace", value: 11}, {name: "ace", value: 11}, {name: "ace", value: 11}, {name: "ace", value: 11} ];
	startValueStr = ""+startValue;

	document.getElementById("startGame").disabled = false;
	document.getElementById("resetGame").disabled = true;
	
	addEvent(document.getElementById("startGame"), "click", startGame);
	addEvent(document.getElementById("resetGame"), "click", resetGame);
	addEvent(document.getElementById("yes"), "click", stopGame);
	addEvent(document.getElementById("no"), "click", continueGame);
	addEvent(document.getElementById("submitBtn"), "click", submitAce);
}

function startGame(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
	
	document.getElementById("num1text").style.visibility = "visible";
	document.getElementById("num2text").style.visibility = "visible";
	document.getElementById("num3text").style.visibility = "visible";
	document.getElementById("num4text").style.visibility = "visible";
	document.getElementById("num5text").style.visibility = "visible";
	
	/*YES, NO & RESET buttons enable, START disables*/
	document.getElementById("startGame").disabled = true;
	document.getElementById("resetGame").disabled = false;
	document.getElementById("yes").disabled = false;
	document.getElementById("no").disabled = false;
	
	rangeStr = ""+range;
	
	/*These two variables will constantly be used throughout the program*/
	plusRange = startValue+range;
	plusRangeStr = ""+plusRange;
	
	document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Your guess is that the car is currently worth $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	".<br/>The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
}

function resetGame(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	/*RESET GAME*/
	document.getElementById("num1text").style.visibility = "hidden";
	document.getElementById("num2text").style.visibility = "hidden";
	document.getElementById("num3text").style.visibility = "hidden";
	document.getElementById("num4text").style.visibility = "hidden";
	document.getElementById("num5text").style.visibility = "hidden";
	document.getElementById("ace").style.visibility = "hidden";
	
	document.getElementById("num1text").value = "";
	document.getElementById("num2text").value = "";
	document.getElementById("num3text").value = "";
	document.getElementById("num4text").value = "";
	document.getElementById("num5text").value = "";
	document.getElementById("input").value = "";
	
	document.getElementById("startGame").disabled = false;
	document.getElementById("resetGame").disabled = true;
	
	range = (Math.floor(Math.random() * 5)) * 1000 + 1000; /*Range is between 1000 and 5000*/
	carValue = (15000 + Math.floor(Math.random() * 8 * 1000)); /*Car Value is between [15000, 23000[ */
	startValue = 15000; /*Car price starts at $15,000*/
	cards = [ {name: "two", value: 2}, {name: "two", value: 2}, {name: "two", value: 2}, {name: "two", value: 2},
			{name: "three", value: 3}, {name: "three", value: 3}, {name: "three", value: 3}, {name: "three", value: 3},
			{name: "four", value: 4}, {name: "four", value: 4}, {name: "four", value: 4}, {name: "four", value: 4},
			{name: "five", value: 5}, {name: "five", value: 5}, {name: "five", value: 5}, {name: "five", value: 5},
			{name: "six", value: 6}, {name: "six", value: 6}, {name: "six", value: 6}, {name: "six", value: 6},
			{name: "seven", value: 7}, {name: "seven", value: 7}, {name: "seven", value: 7}, {name: "seven", value: 7},
			{name: "eight", value: 8}, {name: "eight", value: 8}, {name: "eight", value: 8}, {name: "eight", value: 8},
			{name: "nine", value: 9}, {name: "nine", value: 9}, {name: "nine", value: 9}, {name: "nine", value: 9},
			{name: "ten", value: 10}, {name: "ten", value: 10}, {name: "ten", value: 10}, {name: "ten", value: 10},
			{name: "king", value: 10}, {name: "king", value: 10}, {name: "king", value: 10}, {name: "king", value: 10},
			{name: "jack", value: 10}, {name: "jack", value: 10}, {name: "jack", value: 10}, {name: "jack", value: 10},
			{name: "queen", value: 10}, {name: "queen", value: 10}, {name: "queen", value: 10}, {name: "queen", value: 10},
			{name: "ace", value: 11}, {name: "ace", value: 11}, {name: "ace", value: 11}, {name: "ace", value: 11} ];
	startValueStr = ""+startValue;
	
	document.getElementById("gameplay").innerHTML = "";
	document.getElementById("yes").disabled = true;
	document.getElementById("no").disabled = true;
}

function stopGame(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("yes").disabled = true;
	document.getElementById("no").disabled = true;
	
	document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Your guess is that the car is currently worth $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	".<br/>The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
	
	var carValueStr=""+carValue;
	
	document.getElementById("gameplay").innerHTML += "<p style=\"text-align: center\"><b>The actual price of the car is $" + carValueStr.substring(0, carValueStr.length-3) + "," + carValueStr.substring(carValueStr.length-3, carValueStr.length) + 
	".</b></p>";
	
	if (carValue >= startValue && carValue <= plusRange){
		document.getElementById("gameplay").innerHTML += "<p style=\"text-align: center\"><b>Congratulations, you won a $" + carValueStr.substring(0, carValueStr.length-3) + "," + carValueStr.substring(carValueStr.length-3, carValueStr.length) + 
		" car!</b></p>";
	}
	else {
		document.getElementById("gameplay").innerHTML += "<p style=\"text-align: center\"><b>Sorry, better luck next time.</b></p>";
	}
}

function continueGame(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	/*GAME LOGIC*/
	cardIndex = Math.floor(Math.random() * cards.length);
	card = cards[cardIndex];
	cards.splice(cardIndex, 1);

			if(card.value == 11){
				/*Formatting Purposes*/
					document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew an ace. Aces are wild. Input any value between 0 to one less than the car price to add it to the car price, or any five digit number that is larger than or equal to the current car price, which would then serve as your next guess as to what you think the car price is.<br/>Your guess is that the car is currently worth $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	".<br/>The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
					document.getElementById("ace").style.visibility = "visible";
					document.getElementById("yes").disabled = true;
					document.getElementById("no").disabled = true;
			}
			else {
				document.getElementById("ace").style.visibility = "hidden";
				switch(card.name){
					case "two":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "three":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "four":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "five":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "six":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "seven":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "nine":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "ten":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "king":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "queen":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "jack":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
					case "eight":{
						//Formatting Purposes
						if(startValue % 1000 == 0){
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						else {
							moneyAdded = (card.value * 100);
							startValue += moneyAdded;
							startValueStr = ""+startValue;
							document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
							plusRange = startValue+range;
							plusRangeStr = ""+plusRange;
							document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You drew a " + card.name + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + ". The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
	" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
						}
						break;
					}
				}
			}
}

function submitAce(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("yes").disabled = false;
	document.getElementById("no").disabled = false;
	document.getElementById("ace").style.visibility = "hidden";
	
	moneyAdded = Number(document.getElementById("input").value);

	if(moneyAdded >= 0 && moneyAdded < startValue){
		startValue += moneyAdded;
		startValueStr = ""+startValue;
		document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);

		if(moneyAdded >= 1000 && moneyAdded < startValue){
			moneyAddedStr = ""+moneyAdded;
			plusRange = startValue+range;
			plusRangeStr = ""+plusRange;
			document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You added $" + moneyAddedStr.substring(0, moneyAddedStr.length-3) + "," + moneyAddedStr.substring(moneyAddedStr.length-3, moneyAddedStr.length) + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + "<br/>The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
			" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
		}
		else if(moneyAdded >= 0 && moneyAdded < 1000){
			plusRange = startValue+range;
			plusRangeStr = ""+plusRange;
			document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You added $" + moneyAdded + ".<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + "<br/>The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
			" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
		}
	}
	else if(moneyAdded >= startValue && moneyAdded < 100000){
		startValue = moneyAdded;
		startValueStr = ""+startValue;
		document.getElementById("num1text").innerHTML = startValueStr.substring(0,1);
	document.getElementById("num2text").innerHTML = startValueStr.substring(1,2);
	document.getElementById("num3text").innerHTML = startValueStr.substring(2,3);
	document.getElementById("num4text").innerHTML = startValueStr.substring(3,4);
	document.getElementById("num5text").innerHTML = startValueStr.substring(4,5);
		plusRange = startValue+range;
		plusRangeStr = ""+plusRange;
		document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + "<br/>The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
		" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
	}
	else {
		document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Invalid input. Input any value to add to the car price in between 0 to $1 less than the car price, or any five digit number that is larger than or equal to the current car price.<br/>The car is currently worth: $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + "<br/>The allowable range is $" + rangeStr.substring(0,1) + "," + rangeStr.substring(1,rangeStr.length) + ", so the price must be between $" + startValueStr.substring(0, startValueStr.length-3) + "," + startValueStr.substring(startValueStr.length-3, startValueStr.length) + 
		" and $" + plusRangeStr.substring(0, plusRangeStr.length-3) + "," + plusRangeStr.substring(plusRangeStr.length-3, plusRangeStr.length) + " to win.</b></p>";
	}
	
	document.getElementById("input").value = "";
}

var range, carValue, startValue, cards;

var card;
var cardIndex;
var moneyAdded;
var aceInput; //If an ace is drawn
var startValueStr; //Start Value as String, Formatting Purposes
var moneyAddedStr; //Money Added as String (for ace), Formatting Purposes

var rangeStr, plusRange, plusRangeStr;

window.onload = init;