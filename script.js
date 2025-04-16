const lines = [
  "Thine eyes are stars that light my endless night.",
  "In thee, the moonlight sleeps, serene and still.",
  "Thy voice—a melody that stirs the soul.",
  "With every breath, I whisper thee my will."
];

function changeGreeting() {
  const greeting = document.getElementById('greeting');
  const randomIndex = Math.floor(Math.random() * lines.length);
  greeting.textContent = lines[randomIndex];
}
