//const games = require('./games.json');
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
