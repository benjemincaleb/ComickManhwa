function scrollManhwas(direction) {
    const container = document.querySelector('.carousel-wrapper');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    let newPosition;
  
    if (direction === 'prev') {
        newPosition = container.scrollLeft - scrollAmount;
    } else if (direction === 'next') {
        newPosition = container.scrollLeft + scrollAmount;
  
        // Check if the scroll position reaches the end
        if (newPosition >= container.scrollWidth - container.clientWidth) {
            newPosition = 0; // Scroll back to the beginning
        }
    }
  
    container.scroll({
        left: newPosition,
        behavior: 'smooth' // Smooth scroll animation
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Function to automatically scroll to the next slide every 1 second
    setInterval(function() {
      scrollManhwas('next');
    }, 4000);
  });

  
