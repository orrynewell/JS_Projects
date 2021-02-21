const navBar = document.querySelector('#navBar');
const barTop = navBar.getBoundingClientRect().top

window.addEventListener('scroll', addFixed)

function addFixed() {
    let triggerBottom = window.innerHeight/10;
    console.log(triggerBottom)
    console.log(barTop)
    if (barTop < 100){
        navBar.classList.add('fixed-top');
    }
    else{
        navBar.classList.remove('fixed-top')
    }
}