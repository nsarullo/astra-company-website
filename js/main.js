AOS.init({
  once: true,
  disable: false,
  duration: 700,
  easing: 'ease-out-cubic',
});

const testimonialEl = document.querySelectorAll('.testimonial-carousel');
if (testimonialEl.length > 0) {
  const testimonial = new Swiper('.testimonial-carousel', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: 'fade',    
    pagination: {
      el: '.testimonial-carousel-pagination',
      clickable: true
    },
  });
}

// FORM SUBMISSION

function onClickSubmitForm() {
  submitForm()
}

function submitForm() {

  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const companyName = document.getElementById('company-name').value.trim();
  const companySize = document.getElementById('company-size').value.trim();
  const reason = document.getElementById('reason').value.trim();
  const comment = document.getElementById('comment').value.trim();

  errorColor = '#FF584D'
  successColor = '#12B76A'

  if (!firstName) {
    showAlert("First name is required.", errorColor);
    return;
  }
  if (!lastName) {
    showAlert("Last name is required.", errorColor);
    return;
  }
  if (!email || !validateEmail(email)) {
    showAlert("A valid email address is required.", errorColor);
    return;
  }
  if (!companyName) {
    showAlert("Company name is required.", errorColor);
    return;
  }
  if (!companySize) {
    showAlert("Company size is required.", errorColor);
    return;
  }
  if (!reason) {
    showAlert("Reason is required.", errorColor);
    return;
  }

  const data = {
    firstName,
    lastName,
    email,
    companyName,
    companySize,
    reason,
    comment
  };

  fetch('https://jfz4wlxcvl.execute-api.us-west-2.amazonaws.com/prod/contact-form-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'EwC7kf65Cb5qizQrds99Y8vAly3IW6YnZ7729oXf'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      showAlert('Form Submitted', successColor)
      clearForm('contact-us-form')
      console.log('Success:', data);
    })
    .catch((error) => {
      showAlert('Error, Form Not Submitted', errorColor)
      console.error('Error:', error);
    });    

}

function showAlert(alertText, color) {
  const customAlert = document.getElementById('custom-alert');
  const overlay = document.getElementById('overlay');
  customAlert.style.display = 'block';
  customAlert.style.backgroundColor = color;
  customAlert.innerHTML=alertText
  overlay.style.display = 'block';

  setTimeout(() => {
    customAlert.style.display = 'none';
    overlay.style.display = 'none';
  }, 1500);
}

function clearForm(formID){
  const form = document.getElementById(formID);
  form.reset();
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
