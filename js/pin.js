// random pin create
function getPin(){
    const randomPin = Math.round(Math.random() * 8888)
    const convertPin = randomPin + "";

    if(convertPin.length == 4){
        return convertPin;
    }else{
        return getPin();
    }
}
// main pin generator
function generatePin(){
    const pin = getPin();
    const inputPin = document.getElementById('inputPin');
    inputPin.value = pin;
}

// handle all number buttons
function handleButtons(event){
    const number = event.target.innerText;
    const numberInput = document.getElementById("number-input");
    // check input value
    if(isNaN(number)){
        if(number === "C"){
            numberInput.value = '';
        }
    }else{
        const numberValue = numberInput.value;
        const newNumberValue = numberValue + number;
        numberInput.value = newNumberValue;
    }

}
// pin match function
function pinMatch(){
    const inputPin = document.getElementById('inputPin');
    const numberInput = document.getElementById("number-input");
    const errorMessage = document.getElementById("notify-fail");
    const successMessage = document.getElementById("notify-success");
    // check pin match or not
    if(inputPin.value === numberInput.value){
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
        numberInput.value = '';
        inputPin.value = '';
    }else{
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
        numberInput.value = '';
    }
}

