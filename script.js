document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const formData = new FormData(contactForm);
      const actionUrl = contactForm.getAttribute('action');

      // Feedback state
      if (submitBtn) submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch(actionUrl, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert('Thank you! Your message has been sent directly to our inbox.');
          contactForm.reset();
        } else {
          alert('Oops! There was a problem submitting your form. Please check your Formspree ID.');
        }
      } catch (error) {
        alert('Connection error. Please try again later.');
      } finally {
        if (submitBtn) submitBtn.textContent = 'Send Message';
      }
    });
  }
});