const cell = document.querySelectorAll('.divTableCell');
let player = 0;
let position;

cell.forEach(function (e) {
  e.addEventListener('click', function () {
    if (this.classList == 'divTableCell') {
      if (player == 0) {
        this.classList.add('circle');
        player = 1;
      } else {
        this.classList.add('cross');
        player = 0;
      }
    }
    checkWin(this);
  })
})

function checkWin(selected) {
  let position = getSelectedPosition(selected);
  let crossesPosition = [
    [
      [-3, -3],
      [-2, -2],
      [-1, -1]
    ],
    [
      [-2, -2],
      [-1, -1],
      [1, 1]
    ],
    [
      [-1, -1],
      [1, 1],
      [2, 2]
    ],
    [
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    [
      [3, -3],
      [2, -2],
      [1, -1]
    ],
    [
      [2, -2],
      [1, -1],
      [-1, 1]
    ],
    [
      [1, -1],
      [-1, 1],
      [-2, 2]
    ],
    [
      [-1, 1],
      [-2, 2],
      [-3, 3]
    ],
    [
      [-3, 0],
      [-2, 0],
      [-1, 0]
    ],
    [
      [-2, 0],
      [-1, 0],
      [1, 0]
    ],
    [
      [-1, 0],
      [1, 0],
      [2, 0]
    ],
    [
      [1, 0],
      [2, 0],
      [3, 0]
    ],
    [
      [0, -3],
      [0, -2],
      [0, -1]
    ],
    [
      [0, -2],
      [0, -1],
      [0, 1]
    ],
    [
      [0, -1],
      [0, 1],
      [0, 2]
    ],
    [
      [0, 1],
      [0, 2],
      [0, 3]
    ]
  ]
  let winPosition = getWinPosition(position, crossesPosition);
  let winElements = getWinElements(winPosition);

  for (let i = 0; i < winElements.length; i += 1) {
    if (winElements[i][0].classList.contains('circle') && winElements[i][1].classList.contains('circle') && winElements[i][2].classList.contains('circle') && player == 1) {
      showWinner('Circle');
    } else if (winElements[i][0].classList.contains('cross') && winElements[i][1].classList.contains('cross') && winElements[i][2].classList.contains('cross') && player == 0) {
      showWinner('Cross');
    }
  }
}

function getSelectedPosition(position) {
  let selectedX = parseInt(position.dataset.x);
  let selectedY = parseInt(position.dataset.y);
  return [selectedX, selectedY];
}

function getWinPosition(actuall, pluss) {
  let newPoss = [];
  for (let i = 0; i < pluss.length; i += 1) {
    newPoss[i] = [];
    for (let j = 0; j < pluss.length; j += 1) {
      newPoss[i][j] = [];
    }
  }
  for (let i = 0; i < pluss.length; i += 1) {
    for (let j = 0; j < pluss[i].length; j += 1) {
      for (let k = 0; k < pluss[i][j].length; k += 1) {
        newPoss[i][j][k] = actuall[k] + pluss[i][j][k];
      }
    }
  }
  return newPoss;
}

function getWinElements(xy) {
  let result = []
  for (let i = 0; i < xy.length; i += 1) {
    result[i] = [];
  }
  for (let i = 0; i < xy.length; i += 1) {
    for (let j = 0; j < xy[i].length; j += 1) {
      let content = '[data-x~="' + xy[i][j][0] + '"]'
      result[i][j] = document.querySelectorAll(content)[xy[i][j][1]];
    }
  }
  return result;
}

function showWinner(who) {
  document.querySelector('.result').className = 'result showWinner';
  document.querySelector('.result p').textContent = 'And the winner is ' + who + '! Contgratulation!';
}
