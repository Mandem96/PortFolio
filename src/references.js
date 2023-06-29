const referialCard = document.querySelector('.referial-card');

referialCard.addEventListener('mouseenter', function() {
  this.classList.add('expanded');
});

referialCard.addEventListener('mouseleave', function() {
  this.classList.remove('expanded');
});
