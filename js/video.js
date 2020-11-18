var video;
var vol;
var element;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	vol = document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .9
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / .9
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5
	if (video.currentTime > video.duration){
		video.currentTime = 0
	}
	console.log("Current location "+ video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if(video.muted == false){
		video.muted = true
		document.querySelector('#mute').innerHTML = "Unmute"
	} else if (video.muted == true){
		video.muted = false
		document.querySelector('#mute').innerHTML = "Mute"
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100
	vol = document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
	console.log("New Volume is " + this.value);
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	element = document.getElementById("myVideo");
	element.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	element = document.getElementById("myVideo");
	element.classList.remove("oldTime");
});