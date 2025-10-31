function playScare() {
  // Hide title and pictures
  document.getElementById("title").style.display = "none";
  document.getElementById("container").style.display = "none";

  // Show scare screen
  document.getElementById("scareScreen").style.display = "block";

  // Play video
  document.getElementById("ghostVideo").play();
}
