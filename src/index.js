import './styles.css';
import './calc/calc';
import './calc/converter';

import currencyTpl from './templates/currency.hbs';
const currencyRef = document.querySelector('.currency');

export default function fetchApi() {
    return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(res => res.json())
}

markup();
function markup() {
    fetchApi().then(data => {
        const markup = currencyTpl(data.splice(0, 3));
        currencyRef.insertAdjacentHTML('beforeend', markup);
    })
}



