document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form-main");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error occurred while sending message.");
      }
    }).catch(() => alert("Error sending message."));
  });
});
