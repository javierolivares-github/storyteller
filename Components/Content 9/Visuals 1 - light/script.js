const visuals = document.querySelector(".visuals1");
const videoWrapper = visuals.querySelector(".video-wrapper");
const video = visuals.querySelector("video");
const playBtn = visuals.querySelector(".play-btn");

const playPause = () => {
  if (video.paused) {
    playBtn.classList.remove("active");
    video.play();
  } else if (video.play) {
    playBtn.classList.add("active");
    video.pause();
  } 
}


videoWrapper.addEventListener("click", playPause);


