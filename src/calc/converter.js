import fetchApi from '../index.js'

const newObj = { UAH: 1, };
const converter = document.querySelector('.input-wrapper');


fetchApi().then(data => {
    const needData= data.slice(0, 3);
    needData.forEach(({ ccy, sale }) => {
        newObj[ccy] = sale;
        console.log(ccy, sale);
    })
})


converter.addEventListener('input', (e) => {
    console.dir(e.target.name);
    console.dir(e.currentTarget);

    // console.dir(e.target.value);
    const currentInput = Number(e.target.value);
    console.log(currentInput);





    // console.log(e.currentTarget);


})