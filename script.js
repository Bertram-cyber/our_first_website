document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      
      contactForm.reset();
    });
  }
});