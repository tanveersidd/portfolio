// second image
function animateAboutSection() {
  var aboutSection = document.getElementById("about");
  var imageToAnimate = aboutSection.querySelector(".animate-image");
  var aboutSectionTop = aboutSection.getBoundingClientRect().top;

  if (aboutSectionTop <= window.innerHeight / 2) {
    // Check if the top of the "About" section is in the top half of the viewport
    imageToAnimate.classList.add("active-animation");
  } else {
    imageToAnimate.classList.remove("active-animation");
  }
}

// Attach the scroll event listener to trigger the animation
window.addEventListener("scroll", animateAboutSection);

// ----------- first image

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const image = document.querySelector(".fade-in");
let hasFadedIn = false;

// Function to handle the fade-in effect
function handleFadeIn() {
  if (isInViewport(image) && !hasFadedIn) {
    image.classList.add("visible");
    hasFadedIn = true;
  } else if (!isInViewport(image)) {
    hasFadedIn = false;
  }
}

// Add a scroll event listener to trigger the fade-in effect on scroll
window.addEventListener("scroll", handleFadeIn);

// Trigger the fade-in effect once on page load
window.addEventListener("DOMContentLoaded", handleFadeIn);

// -----------footer--------

// Function to toggle the "transformed" class
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".contacts a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const element = event.target;

      // Calculate the distance to move (e.g., 1.5vw)
      const moveDistance = 1.5;

      // Get the current computed transform property
      const transformValue = getComputedStyle(element).transform;

      // Extract the current X translation value
      const currentXTranslation = parseFloat(transformValue.split(",")[4]) || 0;

      // Calculate the new X translation value
      const newXTranslation = currentXTranslation - moveDistance;

      // Apply the new translation value
      element.style.transform = `translateX(${newXTranslation}vw)`;

      // Add a transition for smooth movement
      element.style.transition = "transform 0.5s ease";

      // Remove the transition after it completes
      setTimeout(() => {
        element.style.transition = "";
      }, 500);
    });
  });
});

// dark mode

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        document.documentElement.style.setProperty('--background-color', '#333333');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
    } else {
        body.classList.remove('dark-mode');
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#333333');
    }
});

