const muteBtn = document.querySelector(".mute-btn"); 
const myAudio = document.getElementById("myAudio");

isPlaying = false;

const togglePlay = () => {
  if (myAudio.paused) {
      myAudio.play(); 
  } else {
      myAudio.pause(); 
  }
}


muteBtn.addEventListener('click', function() {
  const icon = this.querySelector('i');

  if (icon.classList.contains('fa-volume-xmark')) {
    icon.classList.remove('fa-volume-xmark');
    icon.classList.add('fa-volume-high');
  } else {
    icon.classList.remove('fa-volume-high');
    icon.classList.add('fa-volume-xmark');
  }

  togglePlay();

});

myAudio.addEventListener("ended", () => {
  myAudio.currentTime = 0; 
  myAudio.play();
})