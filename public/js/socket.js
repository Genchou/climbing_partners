var socket = io();
socket.on("chat message", function(msg) {
	$("#messages").append($("<li>").text(msg));
});
$(document).ready(function() {
	$("#chat").on("submit", function() {
		socket.emit("chat message", $("#message").val());
		$("#message").val("");
		return false;
	});
});