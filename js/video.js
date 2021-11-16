var video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate *= 0.95;
	console.log("New video speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate /= 0.95;
	console.log("New video speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original time is " + video.currentTime);
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15
		console.log("Current Time: " + video.currentTime)
	}

	else {
		video.currentTime = 0
		console.log("Start from the begining: " + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}

	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%" ;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

