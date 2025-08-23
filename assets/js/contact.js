document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form-main");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
        form.reset();
      } else {
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";
      }
    }).catch(error => {
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    });
  });
});
