 // get currency using fetch
let currencyButton = document.getElementsByClassName("course2")[0]
 let priceText = document.getElementsByClassName("selected-currency")[0]
 let currency = document.getElementById('curr')

 currencyButton.onclick = () => {
     let selectedCurrency = currency.value
     priceText.textContent = `${selectedCurrency} in UAH`
     if (selectedCurrency === "USD"){
         fetch('https://api.monobank.ua/bank/currency')
             .then(response => {
                 return response.json()
             })

             .then(data => {
                let price = document.getElementsByClassName('price')[0]
                 price.innerHTML = data[0].rateBuy
             })
             .catch(err => {
                 console.error("error fetching data : ",err)
             })
     }else{
         fetch('https://api.monobank.ua/bank/currency')
             .then(response => response.json())
             .then(data => {
                 let price = document.getElementsByClassName('price')[0]
                 price.innerHTML = data[1].rateBuy
             })
             .catch(err => {
                 console.error("error fetching data : ",err)
             })
     }

 }