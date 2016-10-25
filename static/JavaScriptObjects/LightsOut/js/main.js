var rh = rh || {};
rh.lightsout = rh.lightsout || {};

$(document).ready(function() {
	var LightsOutController = new rh.lightsout.LightsOutController();

	$(".light").click(function(e) {
		LightsOutController.handleClick(e);
	});
	
	$(".new-game-button").click(function(e) {
		LightsOutController.handleNewGame(e);
	});
	
}); 