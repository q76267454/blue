var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2015, 9, 12);
together.setHours(20);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
	var msg = document.createElement("div");
	msg.id = "errorMsg";
	msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
	document.body.appendChild(msg);
	$("#code").css("display", "none")
	$("#copyright").css("position", "absolute");
	$("#copyright").css("bottom", "10px");
	document.execCommand("stop");
} else {
	setTimeout(function () {
		startHeartAnimation();
	}, 500);

	timeElapse(together);
	setInterval(function () {
		timeElapse(together);
	}, 500);

	adjustCodePosition();
	//time
	var myDate = new Date();
	var year=myDate.getFullYear();    
	var month=pad(myDate.getMonth()+1,2);       
	var day=pad(myDate.getDate(),2);        
	var time="*"+year+"-"+month+"-"+day+".";
	function pad(num, n) {  
		var len = num.toString().length;  
		while(len < n) {  
			num = "0" + num;  
			len++;  
		}  
		return num;  
	}
	document.getElementById("times").innerHTML=time;
	//
	$("#code").typewriter();
	
}