const games = require('./games.json');
_iframe = `<iframe src="https://games.crazygames.com/en_US/crazy-pixel-apocalypse/index.html" scrolling="no" allow="autoplay; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write;" allowfullscreen="" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-popups" loading="eager" importance="high" class="game"></iframe>`;
function iframe(url) {
  const page = document.getElementByid("game-div");
}

function crazyGames(url) {
  if (url == games.cpa.name) {
    iframe(games.cpa.url);
  }
}

crazyGames("Crazy Pixel Apocalypse");
