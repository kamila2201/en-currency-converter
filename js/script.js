{
    let formElement = document.querySelector(".js-form");
    let amountElement = document.querySelector(".js-amount");
    let resultElement = document.querySelector(".js-result");
    let currencyElement = document.querySelector(".js-currency");
    let resetButton = document.querySelector(".js-reset");



    const calculateResult = (amount, currency) => {

        const rateEUR = 4.3330;
        const rateUSD = 4.0030;
        const rateCHF = 4.5369;
        const rateGBP = 5.0606;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "CHF":
                return amount / rateCHF;

            case "GBP":
                return amount / rateGBP;
        };

    }

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        resultElement.innerHTML = `You will receive <strong class="outputAmount">${result.toFixed(2)} ${currency}</strong>`;
    });

    resetButton.addEventListener("click", () => {
        resultElement.innerHTML = ``;
    })
}



