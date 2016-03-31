/*global $*/

document.addEventListener("DOMContentLoaded", function() {

	var cookieListUL = $("#cookie-list");

	cookieListUL.prepend("<li>Brownie</li>");

	$("li").wrap("<b></b>");

	cookieListUL.append("<li>White Chocolate Macadamia Nut</li>");

	var newCookieLI = $("<li></li>");


	newCookieLI.html("<b>Snicker Doodle</b>");
	cookieListUL.append(newCookieLI);

	//cookieListUL.empty();
	cookieListUL.remove();

});
