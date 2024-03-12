document.addEventListener('DOMContentLoaded', function() {
    // Select all images within the gallery
    const galleryImages = document.querySelectorAll('.photo-gallery img');

    // Iterate over each image to add a click event listener
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Example action: Display the clicked image in a modal.

            // Check if a modal already exists
            let modal = document.querySelector('.image-modal');
            if (!modal) {
                // Create a modal if it doesn't exist
                modal = document.createElement('div');
                modal.className = 'image-modal';
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '1000';

                // Add an image element inside the modal
                const modalImg = document.createElement('img');
                modalImg.style.maxWidth = '80%';
                modalImg.style.maxHeight = '80%';
                modal.appendChild(modalImg);

                // Append the modal to the body
                document.body.appendChild(modal);

                // Add click event to close the modal
                modal.addEventListener('click', function() {
                    modal.style.display = 'none'; // Hide the modal on click
                });
            }

            // Set the clicked image as the modal image and display the modal
            const modalImg = modal.querySelector('img');
            modalImg.src = this.src; // Use the source of the clicked image
            modal.style.display = 'flex'; // Show the modal
        });
    });
});
