// Function to toggle the visibility of event details
function toggleDetails(eventId) {
    const detailsElement = document.getElementById(eventId);

    if (detailsElement.style.display === "block") {
        detailsElement.style.display = "none";
    } else {
        detailsElement.style.display = "block";
    }
}
