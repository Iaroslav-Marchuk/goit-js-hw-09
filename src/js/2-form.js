let formData = { email: "", message: "" };

const localStorageKey = 'feedback-form-state';

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  formData = JSON.parse(savedData);
  form.querySelector('[name="email"]').value = formData.email;
  form.querySelector('[name="message"]').value = formData.message;
};




form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});




form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log(`Email: ${formData.email}, Message: ${formData.message}`);
  localStorage.removeItem(localStorageKey);
  form.reset();
});


