document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form-main");
  const loader = document.getElementById("loader");
  const thankYou = document.getElementById("thankyou");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (loader) loader.style.display = "block";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(() => {
      if (loader) loader.style.display = "none";
      form.reset();
      thankYou.style.display = "block";
      setTimeout(() => thankYou.style.display = "none", 4000);
    })
    .catch(() => {
      if (loader) loader.style.display = "none";
      form.reset();
      thankYou.style.display = "block"; // still show thank you on error
      setTimeout(() => thankYou.style.display = "none", 4000);
    });
  });
});
