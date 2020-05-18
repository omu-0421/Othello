let currentcolor = 'black'

window.onload = () => {

    const rows = [1,2,3,4,5,6,7,8]
    const columns = [1,2,3,4,5,6,7,8]

    for (row of rows) {
    　for (column of columns) {
        document.querySelector('.grid-contaier').insertAdjacentHTML(
        'beforeend',
        `<div class="grid-item" data-row="${row}" data-column="${column}"></div>`
        )
        }
    }

    Array.from(document.getElementsByClassName('grid-item')).forEach(element => {
        element.addEventListener('click',(e) => {
         e.target.dataset.color= currentcolor

         const row = Number(e.target.dataset.row)
         const column = Number(e.target.dataset.column)

         const functionList [
             getUpLine,
             getRightLine,
             getDownLine
             getLeftLine,
             getUpRightLine,
             getDownRihgtLine,
             getUpLeftLine,
             getDownLeftLine
         ]

         for (const fn of functionList) {

         //マスを全部とる
         squares = fn(row, column)

         //本当にひっくり返したいマス目の配列
         squarestobereversed = gettarget(squares)

         //ひっくり返す
         squarestobereversed.forEach(el =>{el.dataset.color= currentcolor})

         currentcolor = enemycolor()

         }）

}

const enemycolor = () => {
   if (currentcolor == 'black') ? 'white' : 'black'
}

@param {integer} row
@param {integer} column
@return {array}

const getupline = (row) => {
    result = []
    for (i = row - 1; i >0; i--) {
        result.push(document.querySelector('[data-row="${i}"][data-column=${column}]'))
    }
    return result
}

const gettarget = (squares) => {
    result = []
    for (const square of squares) {
      const color = square.dataset.color

      if (color == enemycolor()) {
        result.push(square)
      } else if (color == currentcolor){
        return result
      } else {
        return[]
      }
    }
    return []
}
