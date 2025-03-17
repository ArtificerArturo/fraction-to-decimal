function calculateFracToDec() {
    const resultElement = document.querySelector("#fracToDecimal #result");
    const numeratorElement = document.querySelector("#fracToDecimal #numerator");
    const denominatorElement = document.querySelector("#fracToDecimal #denominator");
    const operatorElement = document.querySelector("#fracToDecimal #operator")
    //round input to nearest integer. could change this to just reject non-integers
    const numerator = Math.round(numeratorElement.value)
    const denominator = Math.round(denominatorElement.value)

    //display rounded value back to user
    numeratorElement.value = numerator
    denominatorElement.value = denominator

    if (isNaN(denominator) || denominator <= 0) {
        resultElement.textContent = "Please enter valid numbers. Denominator cannot be negative or zero, and all fields must contain integers.";
        resultElement.style.color = "red";
    } else if (operatorElement.value == "decimal") {
        let result = math.number(math.fraction(numerator, denominator))
        if (result < 1 && result > -1) {
            resultElement.textContent = `Answer: ${+result.toPrecision(2)}`
        } else {
            resultElement.textContent = `Answer: ${numberWithCommas(+result.toFixed(2))}`
        }
        resultElement.style.color = "black";
    } else if (operatorElement.value == "percentage") {
        let result = math.number(math.fraction(numerator, denominator)) * 100
        if (result < 1 && result > -1) {
            resultElement.textContent = `Answer: ${+result.toPrecision(2)}%`
        } else {
            resultElement.textContent = `Answer: ${numberWithCommas(+result.toFixed(2))}%`
        }
        resultElement.style.color = "black";
    }
}

function numberWithCommas(number) {
    //taken from SO. Worked better than .toLocaleString()
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
