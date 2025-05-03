// Function to toggle the visibility of event details
function toggleDetails(eventId) {
    // Get the event details element by its ID
    const detailsElement = document.getElementById(eventId);

    // Toggle the display of the event details (hide/show)
    if (detailsElement.style.display === "block") {
        detailsElement.style.display = "none";
    } else {
        detailsElement.style.display = "block";
    }
}

