const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// Preload audio elements into DOM
sounds.forEach(sound => {
  // Create audio element
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);

  // Create button
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => playSound(sound));
  buttonsContainer.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

function playSound(name) {
  stopSound();
  const audio = document.getElementById(name);
  currentAudio = audio;
  audio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
