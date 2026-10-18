// Smooth animation on scroll
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    if(card.getBoundingClientRect().top < window.innerHeight){
      card.style.opacity = '1';
    }
  })
})

// Form alert
document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thank you! Message sent successfully.');
})
