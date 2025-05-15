
     
 function sendToWhatsapp() {
  let number = "+265883696918"; // your WhatsApp number
  let name = document.getElementById('name').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let message = document.getElementById('message').value.trim();

  if (name === "" || phone === "" || message === "") {
    alert("Please fill in all fields before sending.");
    return;
  }

  let url = "https://wa.me/" + number + "?text="
    + "Name: " + encodeURIComponent(name) + "%0a"
    + "Phone: " + encodeURIComponent(phone) + "%0a"
    + "Message: " + encodeURIComponent(message);

  window.open(url, '_blank').focus();
}

    


    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const closeBtn = document.querySelector('.close-btn');
  
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });

  function scrollCarousel(direction) {
    const carousel = document.getElementById("photoCarousel");
    const scrollAmount = carousel.querySelector(".carousel-item").offsetWidth + 20; // include gap

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

   const carousel = document.getElementById("photoCarousel");

  function scrollCarousel(direction) {
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 20; // include gap
    carousel.scrollBy({
      left: direction * itemWidth,
      behavior: 'smooth'
    });
  }

  // Arrow key navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') scrollCarousel(1);
    if (e.key === 'ArrowLeft') scrollCarousel(-1);
  });

  // Mobile swipe navigation
  let startX = 0;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) scrollCarousel(1);   // Swipe left
    else if (diff < -50) scrollCarousel(-1); // Swipe right
  });