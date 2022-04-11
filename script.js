const games = require('./games.json');
_iframe = `<iframe src="${gameURL}" scrolling="no" allow="autoplay; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write;" allowfullscreen="" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-popups" loading="eager" importance="high" class="game"></iframe>`;
function iframe(_in) {
  const page = document.getElementByid("game-div");
  page.innerHTML += _in;
}

function crazyGames(url) {
  if (url == games.cpa.name) {
    iframe(games.cpa.html);
  }
}

crazyGames("Crazy Pixel Apocalypse");
