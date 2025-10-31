function showVideo() {
  document.getElementById("videoPopup").style.display = "flex";
  document.getElementById("ghostVideo").play();
}

function closeVideo() {
  document.getElementById("videoPopup").style.display = "none";
  document.getElementById("ghostVideo").pause();
  document.getElementById("ghostVideo").currentTime = 0;
}
