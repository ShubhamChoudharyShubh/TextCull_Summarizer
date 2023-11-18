// Mobile toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navbarLinks = document.querySelector('.navbar-links');
mobileToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Dropdown functionality
const toolsDropdown = document.querySelector('.dropdown');
const summarizationTools = document.querySelector('.dropdown-content');
toolsDropdown.addEventListener('click', () => {
  summarizationTools.classList.toggle('show');
});

// Close dropdown on window click
window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropbtn')) {
    if (summarizationTools.classList.contains('show')) {
      summarizationTools.classList.remove('show');
    }
  }
});

// Navigate to section on option change
function navigateToSection(value) {
  window.location.href = value;
}

// About Us home json img
    // Function to load JSON animation for a specific section
function loadAnimationForSection(sectionId, animationPath) {
  const sectionContainer = document.getElementById(sectionId);

  if (!sectionContainer) {
    console.error(`Section container with id "${sectionId}" not found.`);
    return;
  }

  const animationData = {
    container: sectionContainer,
    path: animationPath, // Path to your JSON animation file for the section
    renderer: 'svg', // or 'canvas', depending on your preference
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to start automatically
  };

  lottie.loadAnimation(animationData);
}

// Load JSON animations for different sections
loadAnimationForSection('aboutUsAnimation', 'img/summary-animation.json');
loadAnimationForSection('textSummarization', 'img/text.json');
loadAnimationForSection('pdfSummarization', 'img/pdf.json');
loadAnimationForSection('blogSummarization', 'img/blog.json');
loadAnimationForSection('videoSummarization', 'img/video.json');

  // Contact Us 
    document.addEventListener('DOMContentLoaded', function () {
      const contactForm = document.querySelector('form');
  
      // Function to handle form submission
      function submitForm(event) {
        event.preventDefault(); // Prevent the form from submitting normally
  
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
  
        // Perform basic validation (you can add more validation as needed)
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields.');
          return;
        }
  
        // Here, you can send the form data to your server or perform any other necessary action
        // For this example, we'll just show a success message
        alert('Form submitted successfully!');
  
        // Reset the form
        contactForm.reset();
      }
  
      // Add an event listener for form submission
      contactForm.addEventListener('submit', submitForm);
    });

// tools

