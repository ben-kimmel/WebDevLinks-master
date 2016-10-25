rh.lightsout.LinearGame = function(numLights) {
	this.numLights = numLights;
	this.numMovesTaken = 0;
	this.hasWon = false;
	this.lightStates = [];
	for (var i = 0; i < numLights; i++) {
		this.lightStates.push(false);
	}
};

rh.lightsout.LinearGame.prototype.pressedLightAtIndex = function(lightIndex) {
	this.numMovesTaken ++;
	if (lightIndex < 0) {
		return;
	} else if (lightIndex == 0) {
		this.toggleStateAtIndex(lightIndex);
		if (this.numLights > 1) {
			this.toggleStateAtIndex(lightIndex + 1);
		}
	} else {
		if (lightIndex < this.numLights - 1) {
			this.toggleStateAtIndex(lightIndex - 1);
			this.toggleStateAtIndex(lightIndex);
			this.toggleStateAtIndex(lightIndex + 1);
		} else {
			this.toggleStateAtIndex(lightIndex - 1);
			this.toggleStateAtIndex(lightIndex);
		}
	}
	return this.checkForWin();
};

rh.lightsout.LinearGame.prototype.toggleStateAtIndex = function(lightIndex) {
	this.lightStates[lightIndex] = !this.lightStates[lightIndex];
};

rh.lightsout.LinearGame.prototype.checkForWin = function() {
	var won = true;
	for(var i = 0; i < this.numLights; i++) {
		won &= this.lightStates[i];
	} 
	return won;
};

/**
 * When initializing a game start empty then use this many random button clicks to scramble
 * the board starting state.  Safer than randomly picking on/off for each light because
 * for some board size (maybe not 13) there are combinations that are unsolvable.
 */
rh.lightsout.LinearGame.NUM_RANDOM_INITIAL_CLICKS = 200;

/** Resets the game state for a new game. */
rh.lightsout.LinearGame.prototype.reset = function() {
	console.log("resetting the board");
	for (var i = 0; i < rh.lightsout.LinearGame.NUM_RANDOM_INITIAL_CLICKS; i++) {
		this.pressedLightAtIndex(Math.floor((Math.random() * this.numLights) + 1));
	}
	this.numMovesTaken = 0;
};
