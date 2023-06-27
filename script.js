const card = document.querySelector('.Awwward');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3')
const sideHeading = document.getElementById('sideHeading');
const sideParagraph = document.getElementById('intoDetails');
const additionalDetails = document.getElementById('additionalDetails');




card.addEventListener('click', function() {
  card.classList.add('Awwward');
  card2.classList.remove('Awwward');
  card3.classList.remove('Awwward');
  sideHeading.textContent = 'Quae a perfectionist.';
  sideParagraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae molestiae nihil soluta ut cupiditate error itaque laudantium consequuntur sapiente mollitia explicabo, minima veniam asperiores architecto? Quidem atque consequatur natus eius inventore nisi. Vitae provident assumenda praesentium`;
  additionalDetails.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae molestiae nihil soluta ut cupiditate error itaque laudantium consequuntur sapiente mollitia explicabo, minima veniam asperiores architecto? Quidem atque consequatur natus eius inventore nisi. Vitae provident assumenda praesentium'
  
  console.log('changed');
});

card2.addEventListener('click', function() {
  card.classList.remove('Awwward');
  card2.classList.add('Awwward');
  card3.classList.remove('Awwward');
  sideHeading.textContent = 'laborantem describitur eius';
  sideParagraph.textContent = `Checkmate... So you two dig up, dig up dinosaurs? They're using our own satellites against us. And the clock is ticking. Checkmate... God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Remind me to thank John for a lovely weekend.\n\n`;
  additionalDetails.textContent = ' God help us, we are in the hands of engineers. God help us, we are in the hands of engineers. Theyre using our own satellites against us. And the clock is ticking. My dad once told me, laugh and the world laughs with you, Cry, and I will give you something to cry about you little bastard!'
  
});

card3.addEventListener('click', function() {
  card.classList.remove('Awwward');
  card2.classList.remove('Awwward');
  card3.classList.add('Awwward');
    sideHeading.textContent = 'Hey, you know how I';
  sideParagraph.textContent = `They're using our own satellites against us. And the clock is ticking. Must go faster. God help us, we're in the hands of engineers. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!

  Hey, you know how I'm, like, always trying to save the planet? Here's my chance. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. You really think you can fly that thing? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`;
  
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