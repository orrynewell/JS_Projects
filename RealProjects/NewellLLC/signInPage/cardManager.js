const register = document.querySelector('#reg');
const cards = document.querySelectorAll('.card')
const cardContent = document.querySelectorAll('.card-contents');
const initialBillConfirm = document.querySelectorAll('.confirm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const address = document.querySelector('#inputAddress');
const address2 = document.querySelector('#inputAddress2');
const city = document.querySelector('#inputCity');
const state = document.querySelector('#inputState');
const zip = document.querySelector('#inputZip');
let customerInfo = {}

contentActive = 0

register.addEventListener('click', (e) =>{
    e.preventDefault();
    cards[0].classList.add('disabled');
    cards[1].classList.remove('disabled');
    cardContent[0].classList.remove('disabled');
    prev.disabled=true;
    next.disabled=true;
})

verify.addEventListener('click', (e) =>{
    e.preventDefault();
    const delay = Math.floor(Math.random() * 3000);
    console.log(delay)
    verify.innerText = 'Verifing...'
    //Check information against server
    setTimeout(function() {
    if (delay > 1000){
        verify.innerText = 'Success'
        next.disabled = false;
        next.classList.remove('disabled-btn');
    }
    else{
        verify.innerText = 'Failed'
        console.log("Check Information Again")
    }}, delay)
})

next.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(contentActive);
    if (contentActive < 3){
        if (contentActive === 0){
            customerInfo = {
                first: firstName.value,
                last: lastName.value,
                address: address.value,
                address2: address2.value,
                city: city.value,
                state: state.value,
                zip: zip.value
            }
            console.log(customerInfo);
        }
        cardContent[contentActive].classList.add('disabled');
        contentActive++;
        cardContent[contentActive].classList.remove('disabled');
        if (contentActive === 1){
            //Get information from server
            let addressString = ""
            if (customerInfo.address2 === ""){
                addressString = `${customerInfo.address}, ${customerInfo.city}, ${customerInfo.state} ${customerInfo.zip}`
            }
            else{
                addressString = `${customerInfo.address} ${customerInfo.address2}, ${customerInfo.city}, ${customerInfo.state} ${customerInfo.zip}`
            }
            initialBillConfirm[0].setAttribute('value', addressString);
            initialBillConfirm[1].setAttribute('value', '2021-04-15');
            initialBillConfirm[2].setAttribute('value', '$60.00');
        }
        if (contentActive === 2){
            next.disabled = true;
            next.classList.add('disabled-btn');
        }
    }
})


prev.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(contentActive);
    if (contentActive > 0){ 
        cardContent[contentActive].classList.add('disabled');
        contentActive--;
        cardContent[contentActive].classList.remove('disabled');
        }
})

const bankMatch = document.querySelector('#bankingCheck');
const billFName = document.querySelector('#billingFirstName');
const billLName = document.querySelector('#billingLastName');
const billAddress = document.querySelector('#billingInputAddress');
const billAddress2 = document.querySelector('#billingInputAddress2');
const billCity = document.querySelector('#billingInputCity');
const billState = document.querySelector('#billingInputState');
const billZip = document.querySelector('#billingInputZip');

const cardIn = document.querySelector('#cardNumber');
const expir = document.querySelector('#expirationDate');
const security = document.querySelector('#securityCode');

const cardSubmit = document.querySelector('#cardSubmit');



bankMatch.addEventListener('click', () =>{
    if (bankMatch.checked){
        billFName.setAttribute('value', customerInfo.first);
        billLName.setAttribute('value', customerInfo.last);
        billAddress.setAttribute('value', customerInfo.address);
        billAddress2.setAttribute('value', customerInfo.address2);
        billCity.setAttribute('value', customerInfo.city);
        billState.setAttribute('value', customerInfo.state);
        billZip.setAttribute('value', customerInfo.zip);
    }
    else{
        billFName.setAttribute('value', '');
        billLName.setAttribute('value', '');
        billAddress.setAttribute('value', '');
        billAddress2.setAttribute('value', '');
        billCity.setAttribute('value', '');
        billState.setAttribute('value', '');
        billZip.setAttribute('value', '');
    }
})

cardSubmit.addEventListener('click', (e) =>{
    e.preventDefault();
    const delay = Math.floor(Math.random() * 3000);
    console.log(delay)
    cardSubmit.innerText = 'Verifing...'
    //Check information against server
    setTimeout(function() {
    if (delay > 1000){
        cardSubmit.innerText = 'Success'
        next.disabled = false;
        next.classList.remove('disabled-btn');
        customerInfo['cardNum'] = cardIn.value;
        customerInfo['expir'] = expir.value;
        customerInfo['sec'] = security.value;
        console.log(customerInfo)
    }
    else{
        cardSubmit.innerText = 'Failed'
        console.log("Check Information Again")
    }}, delay)
})
