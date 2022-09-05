let muteBtn = document.querySelector('mute-btn');
const blueBird = document.querySelector('sound');

muteBtn.addEventListener('click', function() {
  const icon = document.querySelector('i');

  if (icon.classList.contains('fa-volume-high')) {
    icon.classList.remove('fa-volume-high');
    icon.classList.add('fa-volume-xmark');
  } else {
    icon.classList.remove('fa-volume-xmark');
    icon.classList.add('fa-volume-high');
  }

});