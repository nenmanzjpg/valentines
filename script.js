const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const card = document.querySelector(".card");

let noScale = 1;
let noAttempts = 0;

// YES BUTTON CLICK
yesBtn.addEventListener("click", () => {
  result.style.display = "block";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Create Ask Again button
  const askAgainBtn = document.createElement("button");
  askAgainBtn.textContent = "Ask again 😩";
  askAgainBtn.style.marginTop = "20px";
  askAgainBtn.style.background = "#e63946";
  askAgainBtn.style.color = "white";

  askAgainBtn.addEventListener("click", () => {
    result.style.display = "none";
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";

    noBtn.style.position = "static";
    noBtn.style.transform = "scale(1)";
    noScale = 1;
    noAttempts = 0;

    askAgainBtn.remove();
  });

  result.appendChild(askAgainBtn);
});

// EVIL NO BUTTON
noBtn.addEventListener("mouseenter", moveNoButton);

function moveNoButton() {
  noAttempts++;

  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width;
  const maxY = cardRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Shrink slightly each time
  noScale -= 0.08;
  if (noScale < 0.4) noScale = 0.4;
  noBtn.style.transform = `scale(${noScale})`;

  // After too many attempts, vanish 😈
  if (noAttempts > 8) {
    noBtn.style.display = "none";
  }
}
