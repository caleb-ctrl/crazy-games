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
  gameCode = document.forms[0].gameCode.value;
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
        case '':
      break;
    case '':
      break;
        case '':
      break;
    case '':
      break;
        case '':
      break;
    case '':
      break;
        case '':
      break;
    case '':
      break;
    default:
      crazyGames(game.cpa.name)
  }
}

//crazyGames(game.cpa3.name);
