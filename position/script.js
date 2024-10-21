document.addEventListener('DOMContentLoaded', function () {
    let toggleIngredientsBtn = document.getElementById('toggleIngredientsBtn');
    let ingredientsList = document.getElementById('ingredientsList');
    let toggleDirectionsBtn = document.getElementById('toggleDirectionsBtn');
    let directionList = document.getElementById('directionsList');
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');
    let gallery = document.getElementById('imageGallery');
    let images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;
  
    // Function to add fade-in class to an element
    function fadeIn(element) {
      element.classList.add('fade-in');
    }
  
    // Function to remove fade-in class from all images
    function resetFade() {
      images.forEach((image) => {
        image.classList.remove('fade-in');
      });
    }
  
    images.forEach((image, index) => {
      if (index !== currentIndex) {
        image.style.display = 'none';
      }
    });
  
    function showImage(index) {
      resetFade(); // Remove fade-in class from all images
      images.forEach((image, i) => {
        if (i === index) {
          image.style.display = 'block';
          fadeIn(image); // Add fade-in class to the displayed image
        } else {
          image.style.display = 'none';
        }
      });
    }
  
    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    toggleIngredientsBtn.addEventListener('click', function () {
      ingredientsList.style.display =
        ingredientsList.style.display === 'none' ? 'block' : 'none';
    });
  
    toggleDirectionsBtn.addEventListener('click', function () {
      directionList.style.display =
        directionList.style.display === 'none' ? 'block' : 'none';
    });
  });
  