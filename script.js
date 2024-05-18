import { loggedIn } from './registration.js';

// get currency using fetch
let currencyButton = document.getElementsByClassName("course2")[0];
let priceText = document.getElementsByClassName("selected-currency")[0];
let currency = document.getElementById('curr');

currencyButton.onclick = () => {
    if (loggedIn === false) {
        let money = document.getElementsByClassName('money')[0];
        let err = document.createElement('p')
        money.appendChild(err);
        err.id = "error"
        err.innerHTML = 'You need to be logged in!';
        err.style.color = 'red';
        err.style.marginTop = '20px';
        console.error('you need to be logged in')
    } else if (loggedIn === true) {
        let selectedCurrency = currency.value;
        priceText.textContent = `${selectedCurrency} in UAH`;
        if (selectedCurrency === "USD") {
            fetch('https://api.monobank.ua/bank/currency')
                .then(response => response.json())
                .then(data => {
                    let price = document.getElementsByClassName('price')[0];
                    price.innerHTML = data[0].rateBuy;
                    let err = document.getElementById('error')
                    err.innerHTML = ""
                })
                .catch(err => {
                    console.error("error fetching data : ", err);
                });
        } else if( selectedCurrency === "EUR"){
            fetch('https://api.monobank.ua/bank/currency')
                .then(response => response.json())
                .then(data => {
                    let price = document.getElementsByClassName('price')[0];
                    price.innerHTML = data[1].rateBuy;
                    let err = document.getElementById('error');
                    err.innerHTML = "";
                })
                .catch(err => {
                    console.error("error fetching data : ", err);
                });
        }
    }
};
