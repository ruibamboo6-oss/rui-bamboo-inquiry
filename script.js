function sendInquiry() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const message = document.getElementById("message").value;

    if (name === "") {
        alert("Please enter your company name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    alert(
        "Inquiry submitted successfully!\n\n" +
        "Company: " + name +
        "\nEmail: " + email +
        "\nProduct: " + product +
        "\nMessage: " + message
    );
}
