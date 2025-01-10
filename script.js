const inputContainers = document.querySelectorAll('.mortgage-calculator-left-bottom-input-container');
const radioInputContainers = document.querySelectorAll('.mortgage-calculator-left-bottom-input-radio-container');
const errorMessages = document.querySelectorAll('.mortgage-calculator-error-message');
const errorMessageRadioInput = document.querySelector('.mortgage-calculator-error-message-radio');
const inputs = document.querySelectorAll('.mortgage-calculator-left-bottom input:not(#repaymentTypeInput, #interestOnlyTypeInput)');
const inputSymbols = document.querySelectorAll('.mortgage-calculator-left-bottom-input-text');
const submitButton = document.getElementById('submitButton');
const repaymentTypeInput = document.getElementById('repaymentTypeInput');
const interestOnlyTypeInput = document.getElementById('interestOnlyTypeInput');
const radioInputs = document.querySelectorAll('.mortgage-calculator-left-bottom-radio-input-itself');

// OUTPUT
const rightEmptyContainer = document.querySelector('.mortgage-calculator-right-empty');
const rightOutputContainer = document.querySelector('.mortgage-calculator-right-output');
const monthlyRepaymentText = document.querySelector('.mortgage-calculator-right-output-itself-inner-monthly-repayment');
const totalRepayText = document.querySelector('.mortgage-calculator-right-output-itself-inner-total-repay');

// CALCULATE THE REPAYMENT 

function calculateTheRepayment(e) {
    e.preventDefault();

    const errorMessagesArray = [];

    for (let i = 0; i < inputContainers.length; i++) {
        if (inputs[i].value === '') {
            errorMessagesArray.push(inputs[i] + ' is empty.');
            inputContainers[i].style.border = '1px solid hsl(4, 69%, 50%)';
            inputSymbols[i].classList.add('mortgage-calculator-left-bottom-input-text-error');
            errorMessages[i].style.display = 'unset';
        } else {
            inputContainers[i].style.border = '1px solid hsl(200, 24%, 40%)';
            inputSymbols[i].classList.remove('mortgage-calculator-left-bottom-input-text-error');
            errorMessages[i].style.display = 'none';
        };
    };

    // RADIO INPUTS
    for (const radioInput of radioInputs) {
        if (!radioInput.checked) {
            errorMessagesArray.push('Not checked');
            errorMessageRadioInput.style.display = 'unset';
        } else {
            errorMessageRadioInput.style.display = 'none';
            break;
        };
    };

    // IF ALL THE REQUIREMENTS ARE MET, THEN DO THE FOLLOWING:
    if (errorMessagesArray.length === 0) {

    };
};

// INITIALIZING THE BUTTON
submitButton.addEventListener('click', calculateTheRepayment);