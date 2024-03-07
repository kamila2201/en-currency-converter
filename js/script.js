let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let resetButton = document.querySelector(".js-reset");





const rateEUR = 4.3330;
const rateUSD = 4.0030;
const rateCHF = 4.5369;
const rateGBP = 5.0606;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
    };


    resultElement.innerHTML = `You will receive <strong class="outputAmount">${result.toFixed(2)} ${currency}</strong>`;
});

resetButton.addEventListener("click", () => {
    resultElement.innerHTML = ``;
})




