// contact.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form-main");
    const success = document.getElementById("success");
    const error = document.getElementById("error");
    const loader = document.getElementById("loader");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const data = new FormData(form);

        if (loader) loader.style.display = "block";

        fetch(form.action, {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(async response => {
            if (loader) loader.style.display = "none";
            const result = await response.json().catch(() => ({}));

            if (response.ok) {
                success.style.display = "block";
                error.style.display = "none";
                form.reset();
                setTimeout(() => success.style.display = "none", 3000);
            } else {
                console.error("Formspree error:", result);
                success.style.display = "none";
                error.style.display = "block";
                setTimeout(() => error.style.display = "none", 3000);
            }
        })
        .catch(err => {
            if (loader) loader.style.display = "none";
            console.error("Fetch error:", err);
            success.style.display = "none";
            error.style.display = "block";
            setTimeout(() => error.style.display = "none", 3000);
        });
    });
});
