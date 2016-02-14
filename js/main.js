$("#u_0_1").append("<div class='_1uh-'><p id='timer'></p></div>");

var store_timer_seconds = function() {
	        var secondsSpentOnFacebook = $("#timer").data('seconds');
	        chrome.storage.sync.set({'timeSpentOnFacebook': secondsSpentOnFacebook});
}

var timer_settings = {
	format: "%H:%M:%S",
	duration: "1s",
    callback: store_timer_seconds,
    repeat: true
}

chrome.storage.sync.get('timeSpentOnFacebook', function(result){
	var timeSpentOnFacebook = result["timeSpentOnFacebook"];

	if(timeSpentOnFacebook){
		timer_settings["seconds"] = timeSpentOnFacebook;
		$("#timer").timer(timer_settings);
	} 
	else {
		$("#timer").timer(timer_settings);
	}
});



