let randomNumber = Math.floor(Math.random()*100+1);
let myName = document.getElementById('myName');
let crushName = document.getElementById('crushName');
let form = document.querySelector('form');
let lastHeading = document.querySelector('.last-heading');
let resetbtn = document.querySelector(".reset");

form.addEventListener('submit',runEvent);
resetbtn.addEventListener('click',resetform);

function runEvent(e){
    if(randomNumber >= 50){
        lastHeading.innerHTML = myName.value + ' <i class="fas fa-heart"></i> ' + crushName.value + ' are ' + randomNumber + '% Match';
        e.preventDefault();
    }
    else{
        lastHeading.innerHTML = myName.value + ' <i class="fas fa-heart-broken"></i> ' + crushName.value + ' are ' + randomNumber + '% Match';
    e.preventDefault();
    }
}

function resetform(){
    location.reload();
}
