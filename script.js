function sendInquiry() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const message = document.getElementById("message").value;

    alert(
        "Company: " + name +
        "\nEmail: " + email +
        "\nProduct: " + product +
        "\nMessage: " + message
    );
}
