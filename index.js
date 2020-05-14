console.log('omuomu');



window.onload = () => {

    Array.from(document.getElementsByName('grid-item')).forEach(element => {
        element.addEventListener('click',(e) => {
            e.target.dataset.color = 'white'
        })
    })



    document.getElementById('c1').addEventListener('click', (e) => {
        e.target.dataset.color = 'white'
    })

}