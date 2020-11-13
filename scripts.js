let background = "#efe988"; // цвет заполнения ползунка
let maxValue = 1000; // максимальное значение

function changeRange() {
  let range = document.querySelector("#range"); // id range
  let input = document.querySelector("#inputRange"); //id input

  input.value = range.value;
  let value = (input.value * 100) / maxValue;
  range.style.background =
    "-webkit-linear-gradient(left ," +
    background +
    " 0%," +
    background +
    " " +
    value +
    "%,#fff " +
    value +
    "%, #fff 100%)";
}

function changeRangeInput() {
  let range = document.querySelector("#range"); // id range
  let input = document.querySelector("#inputRange"); //id input

  range.value = input.value;

  let value = (input.value * 100) / maxValue;
  range.style.background =
    "-webkit-linear-gradient(left ," +
    background +
    " 0%," +
    background +
    " " +
    value +
    "%,#fff " +
    value +
    "%, #fff 100%)";
}

changeRange();

/* Range */

// генерируем значения для range
const rangeValue = [];

for (let i = 900; i < 10000000; ) {
  if (i < 5000) {
    rangeValue.push(i + 100);
    i += 100;
  } else if (i < 10000) {
    rangeValue.push(i + 100);
    i += 100;
  } else if (i < 15000) {
    rangeValue.push(i + 100);
    i += 100;
  } else if (i < 25000) {
    rangeValue.push(i + 500);
    i += 500;
  } else if (i < 50000) {
    rangeValue.push(i + 1000);
    i += 1000;
  } else if (i < 100000) {
    rangeValue.push(i + 5000);
    i += 5000;
  } else if (i < 1000000) {
    rangeValue.push(i + 10000);
    i += 10000;
  } else if (i < 10000000) {
    rangeValue.push(i + 100000);
    i += 100000;
  }
}

// функция отображения range
const runRange = (value = 0) => {
  $(function () {
    $("#rangeSlider").slider({
      min: 0,
      max: rangeValue.length - 1,
      step: 1,
      range: "min",
      value: value,
      animate: "fast",
      change: function (event, ui) {
        document.querySelector("#inputRangeSlider").value =
          rangeValue[$(this).slider("value")];
      },
      slide: function (event, ui) {},
    });
  });
};

// запуск range
runRange();

// меняем положение ползунка на range после ввода в input
const changePriceRange = () => {
  let index = 0;

  // получаем ближайшее значение из имеющегося в массиве
  rangeValue.forEach((element, i) => {
    if (+document.querySelector("#inputRangeSlider").value >= element) {
      index = i;
    }
  });

  // запуск range  с обновленными данными
  runRange(index);
};

/* END Range */
