// DARK MODE + ICON

const toggleBtn = document.querySelector("#darkToggle");

toggleBtn.addEventListener("click", function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggleBtn.innerHTML="🌙";
}else{
toggleBtn.innerHTML="☀️";
}

});


// STICKY NAVBAR

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){
navbar.classList.add("sticky");
}else{
navbar.classList.remove("sticky");
}

});


// SMOOTH SCROLL

const links = document.querySelectorAll(".menu a");

links.forEach(link=>{

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


// COUNTER SKILLS

document.addEventListener("DOMContentLoaded", function(){

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let target = +counter.getAttribute("data-target");
let count = 0;

let speed = 20;

function update(){

if(count < target){

count++;

counter.innerText = count;

setTimeout(update, speed);

}

}

update();

});

});


// VALIDASI FORM

const form = document.querySelector("#contactForm");

if(form){

form.addEventListener("submit", function(e){

const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const message = document.querySelector("#message").value;

if(name === "" || email === "" || message === ""){

alert("Harap isi semua form!");
e.preventDefault();

}

});

}


// MUSIC AUTO PLAY

const music = document.getElementById("bgMusic");

window.addEventListener("click", function(){
music.play();
});