document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();


    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let details = document.getElementById("details").value.trim();

    if (name === "" || email === "" || details === "") {
        alert("Please complete all fields before submitting.");
        return;
    }

    // Send form data to the Flask backend
    fetch('http://localhost:5000/submit-quote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            details: details
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            document.getElementById("contactForm").reset();
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Unable to submit form. Please make sure the server is running.");
    });
});

// Message Form Handler
const messageFormElement = document.getElementById("messageForm");
if (messageFormElement) {
    messageFormElement.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("msg-name").value.trim();
        let email = document.getElementById("msg-email").value.trim();
        let msgType = document.getElementById("msg-type").value.trim();
        let message = document.getElementById("msg-text").value.trim();
        let phone = document.getElementById("msg-phone").value.trim();

        if (name === "" || email === "" || msgType === "" || message === "") {
            alert("Please complete all required fields before submitting.");
            return;
        }

        // Send form data to the Flask backend
        fetch('http://localhost:5000/submit-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                type: msgType,
                message: message,
                phone: phone
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                document.getElementById("messageForm").reset();
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Unable to submit form. Please make sure the server is running.");
        });
    });
}