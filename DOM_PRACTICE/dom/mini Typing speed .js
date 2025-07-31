const output = document.getElementById("typing-box");

// Track key presses
document.addEventListener("keydown", function(event) {
  output.innerText = `You pressed: ${event.key}`;
  output.classList.add("colorful");

  // Random text color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  output.style.color = randomColor;

  // Remove class after animation
  setTimeout(() => {
    output.classList.remove("colorful");
  }, 300);
});
