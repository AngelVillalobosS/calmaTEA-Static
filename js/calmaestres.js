function openModal() {
  document.getElementById("breathingModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("breathingModal").style.display = "none";
  document.getElementById("breathingVideo").pause();
}

function openMusicModal() {
  document.getElementById("musicModal").style.display = "flex";
}

function closeMusicModal() {
  document.getElementById("musicModal").style.display = "none";
  document.getElementById("musicVideo").pause();
}
function changeVideo(videoSrc) {
  let videoElement = document.getElementById("breathingVideo");
  let sourceElement = document.getElementById("videoSource");
  sourceElement.src = videoSrc;
  videoElement.load(); // Recargar el video con la nueva fuente
  videoElement.play(); // Reproducir automáticamente el nuevo video
}

function changeMusic(videoSrc) {
  let videoElement = document.getElementById("musicVideo");
  let sourceElement = videoElement.getElementsByTagName("source")[0];
  sourceElement.src = videoSrc;
  videoElement.load(); // Recargar el video con la nueva fuente
  videoElement.play(); // Reproducir automáticamente el nuevo video
}
