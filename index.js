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

      //上方向のマスを全部とる
      squares = getUpLine(row, column)

      //本当にひっくり返したいマス目の配列
      squaresToBeReversed =getTarget(squares)

      squaresToBeReversed.forEach(el => {el.dataset.color = currentColor} )
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
 * @returns {array}
 */
const getUpLine = (row,column) => {
  result = []
  for (i = row - 1; i > 0; i--)  {
    result.push(document.querySelector('[data-row="${i}"][data-column="${column}"]'))
  }
  return result

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
