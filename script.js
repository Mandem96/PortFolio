


const nav = document.querySelector('.nav');
window.addEventListener('scroll' , fixNav)

function fixNav() {
if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
} else {
    nav.classList.remove('active') ;
}

}












var counter =1;
setInterval(function (){

document.getElementById('radio' + counter).checked = true;
counter ++;
if(counter > 4){
    counter = 1;
}

}, 5000);