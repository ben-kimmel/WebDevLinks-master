rh.objectbasics.Baby = function(name) {
	this.name = name;
	console.log("Hello baby, " + this.name);
	this.hours = 0;
};

rh.objectbasics.Baby.prototype.feedBaby = function() {
	console.log("Thank you for feeding baby, " + this.name);
	this.hours = 0;
};

rh.objectbasics.Baby.prototype.hourPasses = function() {
	this.hours++;
	if (this.hours == 1) {
		console.log("Baby " + this.name + " is sleeping");
	} else if (this.hours == 2) {
		console.log("Baby " + this.name + " is awake. Time to feed " + this.name + ".");
	} else if (this.hours > 2) {
		console.log("Baby " + this.name + " is crying uncontrollably! Feed the baby!");
	}
};