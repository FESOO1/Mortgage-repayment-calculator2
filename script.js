const inputContainers = document.querySelectorAll('.mortgage-calculator-left-bottom-input-container');
const errorMessages = document.querySelectorAll('.mortgage-calculator-error-message');
const errorMessageRadioInput = document.querySelector('.mortgage-calculator-error-message-radio');
const inputs = document.querySelectorAll('.mortgage-calculator-left-bottom input:not(#repaymentTypeInput, #interestOnlyTypeInput)');
const inputSymbols = document.querySelectorAll('.mortgage-calculator-left-bottom-input-text');
const submitButton = document.getElementById('submitButton');
const radioInputs = document.querySelectorAll('.mortgage-calculator-left-bottom-radio-input-itself');
const clearButton = document.getElementById('clearButton');

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
        // DISPLAYING THE OUTPUT BY REMOVING THE ACTIVE CLASS FROM THE EMPTY CONTAINER WHILE ADDING ACTIVE CLASS TO THE OUTPUT CONTAINER
        rightEmptyContainer.classList.remove('mortgage-calculator-right-empty-active');
        rightOutputContainer.classList.add('mortgage-calculator-right-output-active');
    };
};

// CLEAR EVERYTHING

function clearEverything() {
    const allInputs = document.querySelectorAll('.mortgage-calculator-left-bottom input');

    // RESETTING ALL THE INPUT
    for (const input of allInputs) {
        input.value = '';
        input.checked = false;
    };

    // RESETTING THE INPUT CONTAINERS/SYMBOLS/ERROR PARAGRAPHS
    for (let i = 0; i < 3; i++) {
        inputContainers[i].style.border = '1px solid hsl(200, 24%, 40%)';
        inputSymbols[i].classList.remove('mortgage-calculator-left-bottom-input-text-error');
        errorMessages[i].style.display = 'none';
    };

    // RADIO ERROR PARAGRAPH
    errorMessageRadioInput.style.display = 'none';

    // HIDING THE OUTPUT BY ADDING ACTIVE CLASS TO THE EMPTY CONTAINER WHILE REMOVING THE ACTIVE CLASS FROM THE OUTPUT CONTAINER
    rightEmptyContainer.classList.add('mortgage-calculator-right-empty-active');
    rightOutputContainer.classList.remove('mortgage-calculator-right-output-active');
};

// INITIALIZING BUTTONS
submitButton.addEventListener('click', calculateTheRepayment);
clearButton.addEventListener('click', clearEverything);