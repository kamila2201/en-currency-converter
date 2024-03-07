{
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

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `You will receive <strong class="outputAmount">${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();


    // const deleteResult = () => {
    //     resultElement.innerHTML = ``;
    // }

    // let resetButton = document.querySelector(".js-reset");

    // resetButton.addEventListener("click", deleteResult());
}



