//const games = require('./games.json');
function iframe(_in) {
  const page = document.getElementByid("game-div");
  page.innerHTML += _in;
}

function crazyGames(url) {
  if (url == game.cpa.name) {
    iframe(game.cpa.html);
  } else if (url == game.cpa3.name) {
    iframe(game.cpa3.html);
  } else {
    print("error " + url);
  }
}

crazyGames(game.cpa.name);
