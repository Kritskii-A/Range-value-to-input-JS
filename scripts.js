let background = "#efe988" // цвет заполнения ползунка
let maxValue = 1000 // максимальное значение


function changeRange() {
    let range = document.querySelector('#range') // id range
    let input = document.querySelector('#inputRange') //id input


    input.value = range.value
    let value = (input.value*100)/maxValue
    range.style.background = '-webkit-linear-gradient(left ,'+background+' 0%,'+background+' '+value+'%,#fff '+value+'%, #fff 100%)'
}

function changeRangeInput() {
    let range = document.querySelector('#range') // id range
    let input = document.querySelector('#inputRange') //id input

    range.value = input.value

    let value = (input.value*100)/maxValue
    range.style.background = '-webkit-linear-gradient(left ,'+background+' 0%,'+background+' '+value+'%,#fff '+value+'%, #fff 100%)'

}

changeRange()