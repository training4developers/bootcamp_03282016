/*global $*/

document.addEventListener("DOMContentLoaded", function() {

	$("#first-name").val("Crystal");

	var firstName = $("#first-name").val();

	console.log(firstName);

	function sendClick() {
		console.log($("#first-name").val());
	}

	$("button").on("click", sendClick);
	$("button").off("click", sendClick);


});
