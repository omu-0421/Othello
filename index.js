console.log(window.confirm('ゲームスタート！準備はいい？'))

let currentColor = 'black'

window.onload = () => {

  const rows = [1,2,3,4,5,6,7,8]
  const columns = [1,2,3,4,5,6,7,8]

  for (row of rows) {
    for (column of columns){
      document.querySelector('.grid-container').insertAdjacentHTML(
        'beforeend',
        '<div class="grid-item" data-row="${row}" data-column="${column}"></div>'
      )
    }
  }


  Array.from(document.getElementsByClassName('grid-item')).forEach(element => {
    element.addEventListener('click', (e) => {
      e.target.dataset.color = currentColor

      const row = Number(e.target.dataset.row)
      const column = Number(e.target.dataset.column)

      //動画1:39
      const functionList = [
        getUpLine,
        getRightLine,
        getDownLine,
        getLeftLine,
        getUpRightLine,
        getDownRightLine,
        getUpLeftLine,
        getDownLeftLine,
      ]

      for (const fn of functionList){
       //上方向のマスを全部とる
       squares = fn(row, column)

       //本当にひっくり返したいマス目の配列
       squaresToBeReversed = getTarget(squares)
       //ひっくり返す
       squaresToBeReversed.forEach(el => {el.dataset.color = currentColor})

      }
      currentColor = enemyColor()
    })
  })
}

const enemyColor = () => {
  return (currentColor == 'black') ? 'white' : 'black'
}

/**
 *
 * @param {integer} row
 * @param {integer} column
 * @return {array}
 */
const getUpLine = (row,column) => {
  result = []
  for (i = row - 1; i > 0; i--)  {
    result.push(document.querySelector('[data-row="${i}"][data-column="${column}"]'))
  }
  return result

}

/**
 *
 * @param {integer} row
 * @param {integer} column
 * @return {array}
 */
const getDownLine = (row,column) => {
  result = []
  for (i = row - 1; i > 0; i--)  {
    result.push(document.querySelector('[data-row="${i}"][data-column="${column}"]'))
  }
  return result

}

/**
 *
 * @param {integer} row
 * @param {integer} column
 * @return {array}
 */
const getRightLine = (row,column) => {
  result = []
  for (i = row + 1; i < 9; i++)  {
    result.push(document.querySelector('[data-row="${row}"][data-column="${i}"]'))
  }
  return result

}

/**
 *
 * @param {integer} row
 * @param {integer} column
 * @return {array}
 */
const getUpRightLine = (row,column) => {
  result = []
  let r = row, C = column
  while (r > 0 && c < 9) {
    r -= 1
    c += 1
    result.push(document.querySelector('[data-row="${r}"][data-column="${c}"]'))
  }
  return result

}

/**
 *
 * @param {integer} row
 * @param {integer} column
 * @returns {array}
 */
const getDownRightLine = (row,column) => {
  result = []
  while (true) {
    row += 1,column -= 1
    if(!checkInBoard(row, column)) { break }
    result.push(document.querySelector('[data-row="${row}"][data-column="${column}"]'))
  }
  return result


/**
 *
 * @param {integer} row
 * @param {integer} column
 * @return {bool}
 */
const checkInBoard = (row, column) => {
  return (row > 0 && column > 0 && row <9 && column < 9)
}



const getTarget = (squares) => {
  result = []
  for (square of squares) {
    const color = square.dataset.color

    if (color == enemyColor()) {
      result.push(square)
    } else if (color == currentColor){
      return result
    } else {
      return[]
    }
  }
  return []
}
