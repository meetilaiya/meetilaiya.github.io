$(function(){	
	
	function getDisplayTimer(timeObj)
	{
		var dataToDisplay = timeObj.months ? timeObj.months+ "-Months " : "";
		dataToDisplay += timeObj.days ? timeObj.days + "-Days " : "";
		dataToDisplay += timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds;
		return dataToDisplay;
	}
	setInterval(function() {
		var timespan = countdown_ilaiya(new Date("09/04/2016 09:00 AM"), new Date());
		var div = document.getElementById('idSpanTimer');
		div.innerHTML =getDisplayTimer(timespan);
	}, 1000);
});
function getItInTwoDigits(val)
{
	return val>=10 ? val:("0"+val);
}
function countdown_ilaiya(to){
	//console.log(new Date(to - from));
	var from = new Date();
	var ms_sec=1000;
	var sec_min=60;
	var min_hr=60;
	var hr_day=24;
	var day_mnth=30;
	var diff = Math.abs(new Date(from - to));
	var secs = parseInt(diff/ms_sec);
	var mins = parseInt(secs/sec_min);
	var hrs = parseInt(mins/min_hr);
	var days = parseInt(hrs/hr_day);
	var months = parseInt(days/day_mnth);
	return {
		seconds:getItInTwoDigits(secs-(mins*60)),
		minutes:getItInTwoDigits(mins-(hrs*60)),
		hours:getItInTwoDigits(hrs-(days*24)),
		days:days-(months*30),
		months:months
	};
}