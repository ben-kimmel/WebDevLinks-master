rh.lightsout.LightsOutController = function() {
	this.game = new rh.lightsout.LinearGame(13);
	this.game.reset();
	this.updateView();
	this.won = false;
};

rh.lightsout.LightsOutController.prototype.handleClick = function(e) {
	target = $(e.target);
	index = target.index();
	if (!this.won) {
		this.won = this.game.pressedLightAtIndex(index);
		this.updateView();
	}
};

rh.lightsout.LightsOutController.prototype.updateView = function() {
	var vals = this.game.lightStates;
	$('.light').each(function(i, obj) {
		elem = $(this);
		if (vals[i]) {
			if (!elem.hasClass("light-on")) {
				elem.addClass("light-on");
			}
		} else {
			elem.removeClass("light-on");
		}
	});
	if (this.won) {
		console.log("You won in " + this.game.numMovesTaken + " moves!");
		$(".title").text("You won in " + this.game.numMovesTaken + " moves!");
	}
};

rh.lightsout.LightsOutController.prototype.handleNewGame = function(e) {
	this.game.reset();
	this.won = false;
	$(".title").text("Turn all the lights out");
	this.updateView();
};
