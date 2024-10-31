"usestrict;"
var nba_teams = new Array();
nba_teams["Golden State Warriors"]=312;
nba_teams["Phoenix Suns"]=401;
nba_teams["Boston Celtics"]=403;
nba_teams["Milwuakee Bucks"]=660;

function getBetPayoutTotal()
{
	var BetPayoutTotal=0;
	var theForm = document.forms["Betting Calculation"];
	var selectedteam = theForm.elements["Selectedteam"];
	for(var i = 0; i < selectedteam.length; i++)
	{
		if(selectedteam[i].checked)
		{
			BetPayoutTotal = nba_teams[selectedteam[i].value];
			break;
		}
	}
	return BetPayoutTotal;
	
// Single Straight Sports Bet Calculator 

function betCalculator(moneyLine) { 

    var odds;
    var betAmount = +("Enter Bet Amount"); 

    if (moneyLine >= 0) { 
        odds = moneyLine >= 0 ? (moneyLine / 100) + 1 : (100 / Math.abs(moneyLine)) + 1; 

    } else  {
        odds = moneyLine >= 0 ? (moneyLine / 100) + 1 : (100 / Math.abs(moneyLine)) + 1; 


    } return ((odds * betAmount).toFixed(2)); 
}
 
 var TotalPayout = betAmount() * odds()
	document.getElementbyID("totalwinnings").innerHTML = 
	"The Total Payout recieved is"+FinalPayout;
 
}
 
 