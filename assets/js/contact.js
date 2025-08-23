document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form-main");
  const loader = document.getElementById("loader");
  const success = document.getElementById("success");
  const error = document.getElementById("error");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    loader.style.display = "block";
    success.style.display = "none";
    error.style.display = "none";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      loader.style.display = "none";
      
      // ✅ Always clear fields (success OR error)
      form.reset();

      if (response.ok) {
        success.style.display = "block";
        setTimeout(() => success.style.display = "none", 4000);
      } else {
        error.style.display = "block";
        setTimeout(() => error.style.display = "none", 4000);
      }
    })
    .catch(() => {
      loader.style.display = "none";
      
      // ✅ Clear fields even on network error
      form.reset();

      error.style.display = "block";
      setTimeout(() => error.style.display = "none", 4000);
    });
  });
});
