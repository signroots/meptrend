// contact.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form-main");
    const success = document.getElementById("success");
    const error = document.getElementById("error");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const data = new FormData(form);

        // Optionally show a loader if you have one
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "block";

        fetch(form.action, {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (loader) loader.style.display = "none";

            if (response.ok) {
                success.style.display = "block";
                error.style.display = "none";
                form.reset();
                setTimeout(() => success.style.display = "none", 3000);
            } else {
                success.style.display = "none";
                error.style.display = "block";
                setTimeout(() => error.style.display = "none", 3000);
            }
        })
        .catch(() => {
            if (loader) loader.style.display = "none";
            success.style.display = "none";
            error.style.display = "block";
            setTimeout(() => error.style.display = "none", 3000);
        });
    });
});
