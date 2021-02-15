const register = document.querySelector('#reg');
const cards = document.querySelectorAll('.card')
const cardContent = document.querySelectorAll('.card-contents');
const initialBillConfirm = document.querySelectorAll('.confirm');

contentActive = 0

register.addEventListener('click', (e) =>{
    e.preventDefault();
    cards[0].classList.add('disabled');
    cards[1].classList.remove('disabled');
    cardContent[0].classList.remove('disabled');
    prev.disabled=true;
    next.disabled=true;
})

next.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(contentActive);
    cardContent[contentActive].classList.add('disabled');
    contentActive++;
    cardContent[contentActive].classList.remove('disabled');
    if (contentActive === 1){
        initialBillConfirm[0].setAttribute('value', '1234 Smith St. Jackson MO 63755');
        initialBillConfirm[1].setAttribute('value', '04/15/2021');
        initialBillConfirm[2].setAttribute('value', '$60.00');
    }
})


prev.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(contentActive);
    cardContent[contentActive].classList.add('disabled');
    contentActive--;
    cardContent[contentActive].classList.remove('disabled');
})


