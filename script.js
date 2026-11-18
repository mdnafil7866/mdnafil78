// Complaint Form

document.getElementById("complaintForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let category =
        document.getElementById("category").value;

    let location =
        document.getElementById("location").value;

    let description =
        document.getElementById("description").value;


    if (
        category === "" ||
        location === "" ||
        description === ""
    ) {
        document.getElementById("message").innerText =
            "Please fill all required fields.";

        return;
    }


    // Temporary Complaint ID
    let complaintId =
        "CIV-" +
        Math.floor(1000 + Math.random() * 9000);


    document.getElementById("message").innerText =
        "Complaint submitted successfully! Your Complaint ID is "
        + complaintId;


    // Clear form
    document.getElementById("complaintForm").reset();

});


// Track Complaint

function trackComplaint() {

    let id =
        document.getElementById("complaintId").value;


    if (id === "") {

        document.getElementById("trackResult").innerText =
            "Please enter Complaint ID.";

        return;
    }


    document.getElementById("trackResult").innerText =
        "Complaint " + id +
        " Status: Pending";
}