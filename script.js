async function sendInquiry(event) {

    event.preventDefault();

    const form = document.querySelector("form");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "") {
        alert("Please enter your company name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            document.getElementById("success-message").style.display = "block";

            form.reset();

        } else {

            alert("Something went wrong. Please try again.");

        }

    } catch (error) {

        alert("Unable to submit the inquiry. Please try again.");

    }
}
