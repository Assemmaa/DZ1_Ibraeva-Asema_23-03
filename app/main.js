// 1) Используя регулярные выражения необходимо сделать поле для ввода ИНН и как на уроке сделать её проверку.

const innInput = document.querySelector('#innInput')
const innCheck =  document.querySelector('#innCheck')
const innResult = document.querySelector('.innResult')

const regExp = /^\d{14}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)) {
        innResult.innerHTML = "Ваш ИНН правильный"
        innResult.style.color = "red"
    } else {
        innResult.innerHTML = "Ваш ИНН не правильный"
        innResult.style.color = "black"
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2) используя рекурсию необходимо заставить блок двигаться по странице.




let position = 0
function move () {
    position++
    document.querySelector('.box').style.left = position + 'px'
    if (position >= 450) {
        return true
    }
    setTimeout(move,20)
}
document.querySelector('.box').onclick = move
