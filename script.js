function sendInquiry(event) {

    event.preventDefault();

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

    document.getElementById("success-message").style.display = "block";

    document.querySelector("form").submit();
}
