const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const verify = document.querySelector('#verify');


let currentActive = 1;

//All items with progress bar
next.addEventListener('click', () =>{
    if (currentActive < circles.length){
        currentActive+=1;
    }
    update()
})

prev.addEventListener('click', () =>{
    if (currentActive > 1){
        currentActive-=1;
    }
    if (currentActive === 1){
        prev.disabled = true;
    }
    update()
})

function update(){
    circles.forEach((circle, idx) =>{
        if (idx < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (((actives.length -1) / (circles.length - 1)) * 100) + '%'

    if(currentActive === 1){
        prev.classList.add('disabled-btn')
        prev.disabled = true;
    }
    else{
        prev.classList.remove('disabled-btn')
        prev.disabled = false;
    }

    if (currentActive === 4){
        next.disabled = true;
    }
}