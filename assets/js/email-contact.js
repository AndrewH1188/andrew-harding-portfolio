// Taken from EmailJS 

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_7b6vkj5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Thank you for contacting me. I have recieved your message and will reply to you shortly.');;
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});