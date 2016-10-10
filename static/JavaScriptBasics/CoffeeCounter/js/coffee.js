var rh = rh || {};
rh.coffee = rh.coffee || {};
rh.coffee.cups = 0;

rh.coffee.updateView = function() {
	var message = "You've had " + rh.coffee.cups + " cups of coffee.";
	if (rh.coffee.cups == 1) {
		message = " You've had 1 cup of coffee.";
	}
	$("#message").text(message);

	if (rh.coffee.cups > 0) {
		$("body").removeClass("no-cups");
	} else {
		$("body").addClass("no-cups");
	};

	$("img").removeClass();
	if (rh.coffee.cups == 2) {
		$("img").addClass("two-cups");
	} else if (rh.coffee.cups == 3) {
		$("img").addClass("three-cups");
	} else if (rh.coffee.cups == 4) {
		$("img").addClass("four-cups");
	} else if (rh.coffee.cups > 4) {
		$("img").addClass("many-cups");
	}
};

rh.coffee.enableButtons = function() {

	$("#increment-button").click(function() {
		rh.coffee.cups++;
		rh.coffee.updateView();
	});

	$("#decrement-button").click(function() {
		rh.coffee.cups--;
		rh.coffee.updateView();
	});

	$("#reset-button").click(function() {
		rh.coffee.cups = 0;
		rh.coffee.updateView();
	});

};

$(document).ready(function() {
	rh.coffee.enableButtons();
	rh.coffee.updateView();
});
