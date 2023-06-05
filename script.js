//your JS code here. If required.
let angle = 0;
const rotationSpeed = 1; // Adjust this value to control the rotation speed

function rotateLine() {
  const line = document.getElementById('line');
  angle += rotationSpeed;
  line.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotateLine);
}

rotateLine()