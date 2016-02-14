$(document).ready(function() {
	chrome.storage.sync.get('timeSpentOnFacebook', function(result){
		console.log("test!");
		var timeSpentOnFacebook = result["timeSpentOnFacebook"];
		$("#time").text(timeSpentOnFacebook);
	});
	$( "#reset_timer" ).click(function() {
		chrome.storage.sync.set({'timeSpentOnFacebook': 0});
		chrome.storage.sync.get('timeSpentOnFacebook', function(result){
			var timeSpentOnFacebook = result["timeSpentOnFacebook"];
			$("#time").text(timeSpentOnFacebook);
			document.location.reload(true);
		});	
	});
});
