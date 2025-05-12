import emailjs from '@emailjs/browser';

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("9kJAZkLsKi85HOx5E"); // Replace with your EmailJS Public Key

  const form = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      console.log("Form submitted");
      e.preventDefault();

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
      }

      if (successMessage) successMessage.classList.add('hidden');
      if (errorMessage) errorMessage.classList.add('hidden');

      try {
        const formData = new FormData(form);

        const firstName = formData.get("first-name");
        const lastName = formData.get("last-name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        await emailjs.send("service_d5d64z5", "template_nkkswcv", {
          name: `${firstName} ${lastName}`,
          email: email,
          subject: subject,
          message: message,
          time: new Date().toLocaleString(),
        });

        if (successMessage) successMessage.classList.remove('hidden');
      } catch (error) {
        console.error("EmailJS Error:", error);
        if (errorMessage) errorMessage.classList.remove('hidden');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = 'Send message';
        }
      }
    });
  }
});