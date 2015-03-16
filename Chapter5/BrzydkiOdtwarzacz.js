var video;
var display;

window.onload = function () {
    video = document.getElementById("videoPlayer");

    display = document.getElementById("displayStatus");

    video.onplaying = function () {
        display.innerHTML = "Odtwarzanie...";
    }
    video.onpause = function () {
        display.innerHTML = "Pauza";
    }



}

function progressUpdate() {
    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration * 100) + "%";
    var labelString = (Math.round(video.currentTime * 100) / 100) + " s"
    display.innerHTML = labelString.replace(".", ",");
}

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function speedUp() {
    video.play();
    video.playbackRate = 2;
}

function slowDown() {
    video.play();
    video.playbackRate = 0.5;
}

function normalSpeed() {
    video.play();
    video.playbackRate = 1;
}