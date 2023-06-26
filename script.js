const card = document.querySelector('.Awwward');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3')
const sideHeading = document.getElementById('sideHeading');
const sideParagraph = document.getElementById('intoDetails');





card.addEventListener('click', function() {
  card.classList.add('Awwward');
  card2.classList.remove('Awwward');
  card3.classList.remove('Awwward');
  sideHeading.textContent = 'Quae a perfectionist.';
  sideParagraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae molestiae nihil soluta ut cupiditate error itaque laudantium consequuntur sapiente mollitia explicabo, minima veniam asperiores architecto? Quidem atque consequatur natus eius inventore nisi. Vitae provident assumenda praesentium\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae molestiae nihil soluta ut cupiditate error itaque laudantium consequuntur sapiente mollitia explicabo, minima veniam asperiores architecto? Quidem atque consequatur natus eius inventore nisi. Vitae provident assumenda praesentium`;
  
  console.log('changed');
});

card2.addEventListener('click', function() {
  card.classList.remove('Awwward');
  card2.classList.add('Awwward');
  card3.classList.remove('Awwward');
  sideHeading.textContent = 'New Heading';
  sideParagraph.textContent = 'New Content';
  
  
});

card3.addEventListener('click', function() {
  card.classList.remove('Awwward');
  card2.classList.remove('Awwward');
  card3.classList.add('Awwward');
  sideHeading.textContent = 'New Heading';
  sideParagraph.textContent = 'New Content';
  
  console.log('changed');
});




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