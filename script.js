//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

// Create sound buttons
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => playSound(sound));
  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

let currentAudio = null;

function playSound(name) {
  stopSound(); // stop any currently playing audio
  currentAudio = new Audio(`sounds/${name}.mp3`);
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
