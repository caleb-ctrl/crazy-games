const game = require('./games.json')

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

function gaem() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gameCode = urlParams.get('gameCode');
  switch(gameCode) {
    case 'cpa':
      crazyGames(game.cpa.name);
      break;
    case 'cpa2':
      crazyGames(game.cpa2.name);
      break;
    case 'cpa3':
      crazyGames(game.cpa3.name);
      break;
    case 'pga':
      break;
    case 'pga2':
      break;
    case 'pga3':
      break;
    case 'pga4':
      break;
    case 'pga5':
      break;
    case 'pga6':
      break;
    case 'pga7':
      break;
    case 'uno':
      break;
    default:
      crazyGames(game.cpa.name)
  }
}
