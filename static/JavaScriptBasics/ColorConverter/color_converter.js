/** namespace. */
var rh = rh || {};
rh.color = rh.color || {};


/* 
 * Helper methods to go from hex to RGB 
 * from http://www.javascripter.net/faq/hextorgb.htm
 */
rh.color.removeHexChar = function(h) {
	return (h.charAt(0)=="#") ? h.substring(1,7):h;
};
rh.color.hexToR = function(h) {
	return parseInt((rh.color.removeHexChar(h)).substring(0,2), 16);
};
rh.color.hexToG = function(h) {
	return parseInt((rh.color.removeHexChar(h)).substring(2,4), 16);
};
rh.color.hexToB = function(h) {
	return parseInt((rh.color.removeHexChar(h)).substring(4,6), 16);
};


/*
 *  Helper methods to go from RGB to hex
 *  from http://www.javascripter.net/faq/rgbtohex.htm
 */
rh.color.rgbToHex = function(R, G, B) {
	return "#" + rh.color.toHex(R) + rh.color.toHex(G) + rh.color.toHex(B);
};
rh.color.toHex = function(n) {
	n = parseInt(n, 10);
	if (isNaN(n))
		return "00";
	n = Math.max(0, Math.min(n, 255));
	return "0123456789ABCDEF".charAt((n - n % 16) / 16)
			+ "0123456789ABCDEF".charAt(n % 16);
};



// TODO: Figure out what these helper methods do. :)
// TODO: Implement the RGB to Hex Color Converter.
