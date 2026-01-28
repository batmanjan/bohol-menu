const menu = document.getElementById("menu");
const question = document.getElementById("question");
const result = document.getElementById("result");
const noBtn = document.getElementById("noBtn");

let noCount = 0; // Counter para sa NO taps

function openMenu() {
  menu.style.display = "none";
  question.style.display = "block";
}

// DELETE or comment out moveNo stuff
// noBtn.addEventListener("click", moveNo);
// noBtn.addEventListener("touchstart", moveNo);
// function moveNo(e) { ... }

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount === 1) {
    alert("Anong NO?!?! 😠");
  } else if (noCount === 2) {
    alert("sige ah ganyanan 😤");
  } else if (noCount === 3) {
    alert("taeng no yan tanggaling ko na nga 😡");
    noBtn.style.display = "none";

    // CENTER YES button
    const yesBtn = document.querySelector(".yes");
    yesBtn.style.position = "absolute";
    yesBtn.style.left = "50%";
    yesBtn.style.transform = "translateX(-50%)";
  }
});


function sayYes() {
  question.style.display = "none";
  result.style.display = "block";

  // OPTIONAL: kung gusto mo pa, pwede dito i-play ang music
  // const song = document.getElementById("loveSong");
  // song.currentTime = 20;
  // song.play();
}