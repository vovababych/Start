import fetchApi from '../index.js'

const calc = document.querySelector('.calc');
const resultRef=document.querySelector('.result');
const newObj = { GRN: 1, };
let second;
let input;
let firstSelect;
let secondSelect;
let first;

fetchApi().then(data => {
    const needData= data.slice(0, 3);
    needData.forEach(({ ccy, sale }) => {
        newObj[ccy]=sale;
    })
})

calc.addEventListener('input', onCheckInput)

function onCheckInput(e) {
    if (e.target.nodeName === 'INPUT') {
        input = Number(e.target.value);
    }

    if (e.target.id === 'first-select') {
        first = e.target.value;
        firstSelect = newObj[first];
    }

    if (e.target.id === 'second-select') {
        second = e.target.value;
        secondSelect = newObj[second];
    }
    
    result(input, firstSelect, secondSelect);

}

function result(input, firstSelect, secondSelect) {
    const res = (input * firstSelect / secondSelect);
    if (!res) return;
    resultRef.innerHTML=(input*firstSelect/secondSelect).toFixed(2);
}