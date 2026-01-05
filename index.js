document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("linesContainer");
  
  if (!container) {
    console.error("Lines container not found!");
    return;
  }

  const numLines = 60;
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < numLines; i++) {
    const line = document.createElement("div");
    line.className = "blue-line";
    fragment.appendChild(line);
  }
  
  container.appendChild(fragment);

  function updateLineHeights() {
    const pageHeight = document.body.scrollHeight;
    const lines = container.getElementsByClassName("blue-line");
    
    Array.from(lines).forEach(line => {
      line.style.height = `${pageHeight}px`;
    });
  }

  // Debounce resize events
  let resizeTimeout;
  window.addEventListener("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateLineHeights, 100);
  });

  updateLineHeights();
});


// ########################################################  

// function debounce(func, delay) {
//   let timeout;
//   return function(...args) {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(context, args), delay);
//   };
// }

// window.addEventListener('resize', debounce(() => {
//   const navList = document.getElementById('nav-list');
// if (navList && window.innerWidth >= 769 && navList.classList.contains('active')) {
//   navList.classList.remove('active');
// }
// }, 250));

// const toggleButton = document.getElementById('dropdownToggle');
// const dropdownMenu = document.getElementById('dropdownMenu');

// toggleButton.addEventListener('click', () => {
//   dropdownMenu.classList.toggle('hidden');
// });

// // Optional: Close dropdown when clicking outside
// document.addEventListener('click', (e) => {
//   if (!dropdownMenu.contains(e.target) && !toggleButton.contains(e.target)) {
//     dropdownMenu.classList.add('hidden');
//   }
// });   
// #####
// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.querySelector('#submit-button');
//   if (button) {
//     button.addEventListener('click', () => {
//       // your code here
//     });
//   }
// });
// #####
document.addEventListener('DOMContentLoaded', function() {
  // Debounce function for resize events
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      this.classList.toggle('is-active');
    });
  }

  // Handle window resize
  window.addEventListener('resize', debounce(function() {
    if (navList && window.innerWidth >= 769 && navList.classList.contains('active')) {
      navList.classList.remove('active');
      if (navToggle) navToggle.classList.remove('is-active');
    }
  }, 250));

  // Projects dropdown functionality
  const projectLink = document.querySelector('.project-link > a');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (projectLink && dropdownMenu) {
    // Mobile behavior
    if (window.innerWidth < 769) {
      projectLink.addEventListener('click', function(e) {
        // e.preventDefault();
        dropdownMenu.classList.toggle('hidden');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && 
            !projectLink.contains(e.target) && 
            !dropdownMenu.classList.contains('hidden')) {
          dropdownMenu.classList.add('hidden');
        }
      });
    }
    // Desktop behavior is handled by CSS hover
  }

  // Close mobile menu when clicking a nav item
  const navItems = document.querySelectorAll('.nav-item a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth < 769 && navList && navList.classList.contains('active')) {
        navList.classList.remove('active');
        if (navToggle) navToggle.classList.remove('is-active');
      }
    });
  });
});
// #################################################################################

  document.addEventListener('DOMContentLoaded', function() {
  // Function to handle dropdown behavior
  function setupDropdown(triggerClass) {
    const trigger = document.querySelector(`.${triggerClass}`);
    const dropdown = trigger.querySelector('.dropdown-menu');
    let hideTimeout;
    
    // Show dropdown on hover
    trigger.addEventListener('mouseenter', function() {
      clearTimeout(hideTimeout);
      dropdown.style.display = 'block';
    });
    
    // Hide dropdown when leaving trigger or dropdown
    trigger.addEventListener('mouseleave', function(e) {
      // Check if mouse moved to dropdown
      if (!dropdown.contains(e.relatedTarget)) {
        hideTimeout = setTimeout(() => {
          dropdown.style.display = 'none';
        }, 200); // 200ms delay
      }
    });
    
    dropdown.addEventListener('mouseleave', function(e) {
      // Check if mouse moved back to trigger
      if (!trigger.contains(e.relatedTarget)) {
        hideTimeout = setTimeout(() => {
          dropdown.style.display = 'none';
        }, 200); // 200ms delay
      }
    });

    // Also add mouseenter to dropdown to clear timeout
    dropdown.addEventListener('mouseenter', function() {
      clearTimeout(hideTimeout);
    });

    // Move the click handler inside the setupDropdown function
    const triggerLink = trigger.querySelector('a');
    if (triggerLink) {
      triggerLink.addEventListener('click', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
          // e.preventDefault();
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
      });
    }
  }
  
  // Initialize both dropdowns
  setupDropdown('project-link');
});

// ##############################################################################
document.addEventListener('DOMContentLoaded', function() {
  const email = 'office@spreitzer-zt.at';
  let emailElement;
  
  // Find the email element
  document.querySelectorAll('p, span, div, a').forEach(el => {
    if (el.textContent.trim() === email) {
      emailElement = el;
    }
  });
  
  if (emailElement) {
    // Make it look interactive
    emailElement.style.cursor = 'pointer';
    emailElement.style.transition = 'all 0.1s';
    
    // Visual feedback
    emailElement.addEventListener('mouseenter', () => {
      emailElement.style.color = '#0066cc';
      emailElement.style.textDecoration = 'underline';
    });
    
    emailElement.addEventListener('mouseleave', () => {
      emailElement.style.color = 'rgba(0, 75, 241, 1)';
      emailElement.style.textDecoration = 'none';
    });
    
    // Instant click
    emailElement.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = `mailto:${email}`;
    });
    
    // Optional: Add title attribute for accessibility
    emailElement.setAttribute('title', 'Send email');
  }
});
// #############################################################################


document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = button.classList.contains('active');

      // Close all other accordions
      accordionHeaders.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.classList.remove('active');
          const otherContent = otherButton.nextElementSibling;
          otherContent.style.maxHeight = null;
          otherContent.style.paddingTop = "0px";
          otherContent.style.paddingBottom = "0px";
        }
      });

      // Toggle current
      if (!isOpen) {
        button.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingTop = "10px";
        content.style.paddingBottom = "10px";
      } else {
        button.classList.remove('active');
        content.style.maxHeight = null;
        content.style.paddingTop = "0px";
        content.style.paddingBottom = "0px";                            
      }
    });
  });
});


// ##################################################
 document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    let currentPosition = 0;
    const cardWidth = cards[0].offsetWidth + 20; // width + gap
    
    function slide() {
      currentPosition -= 1; // adjust speed here
      if (currentPosition <= -cardWidth) {
        currentPosition = 0;
        // Move first card to end for infinite loop
        container.appendChild(container.firstElementChild);
      }
      container.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(slide);
    }
    
    // Start sliding
    slide();
  });

  // ##################################################


document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.cardi');
  const container = document.querySelector('.cardi-container');

  let currentIndex = 0;
  const intervalTime = 2500;
  let sliderInterval;

  let startX = 0;
  let endX = 0;
  const swipeThreshold = 50; // min swipe distance

  function showSlide(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showSlide(currentIndex);
  }

  function startSlider() {
    sliderInterval = setInterval(nextSlide, intervalTime);
  }

  function stopSlider() {
    clearInterval(sliderInterval);
  }

  /* ---------- Swipe support ---------- */

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopSlider();
  });

  container.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
    startSlider();
  });

  function handleSwipe() {
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }

  /* ---------- Init ---------- */

  showSlide(currentIndex);
  startSlider();

});





// ########## Wohnbau-bildung ##################
document.addEventListener('DOMContentLoaded', function () {
  const card = document.querySelector('.cardii');
  const modal = document.querySelector('.gallery-modal');
  const slides = document.querySelectorAll('.gallery-slide');
  const closeBtn = document.querySelector('.close-gallery');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentSlide = 0;
  let slideInterval;

  // ⭐ New: Open gallery automatically on page load
  modal.style.display = 'flex';
  showSlide(currentSlide);
  startSlideShow();

  // (You can delete this part if you do NOT want manual click opening anymore)
  card.addEventListener('click', function () {
    modal.style.display = 'flex';
    showSlide(currentSlide);
    startSlideShow();
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    clearInterval(slideInterval);
  });

  prevBtn.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetInterval();
  });

  nextBtn.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetInterval();
  });

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
  }

  function startSlideShow() {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 2000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
  }

  modal.addEventListener('mouseenter', () => clearInterval(slideInterval));
  modal.addEventListener('mouseleave', () => startSlideShow());
});



// ###################### Gallery_Gewerbe+industrie ##############################

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-image");
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const leftArrow = document.querySelector(".lightbox-arrow.left");
    const rightArrow = document.querySelector(".lightbox-arrow.right");
    
    if (!mainImage || !galleryImages.length || !lightbox || !lightboxImg) {
        console.warn("Required elements not found!");
        return;
    }

    let currentIndex = 0;
    const allImages = Array.from(galleryImages); // All images including the main one

    // Function to open lightbox at a specific index
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = allImages[currentIndex].src;
        lightbox.style.display = "flex";
        document.body.classList.add("no-scroll");
        
        // Force reflow for smooth animation
        setTimeout(() => {
            lightbox.style.opacity = "1";
        }, 10);
    }

    // Function to close lightbox
    function closeLightbox() {
        lightbox.style.opacity = "0";
        setTimeout(() => {
            lightbox.style.display = "none";
            document.body.classList.remove("no-scroll");
        }, 300);
    }

    // Function to navigate to next image
    function nextImage(e) {
        if (e) e.stopPropagation();
        currentIndex = (currentIndex + 1) % allImages.length;
        lightboxImg.src = allImages[currentIndex].src;
    }

    // Function to navigate to previous image
    function prevImage(e) {
        if (e) e.stopPropagation();
        currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        lightboxImg.src = allImages[currentIndex].src;
    }

    // Click on main image - opens lightbox starting at first image
    mainImage.addEventListener("click", () => {
        openLightbox(0);
    });

    // Close button
    closeBtn.addEventListener("click", closeLightbox);

    // Navigation arrows
    rightArrow.addEventListener("click", nextImage);
    leftArrow.addEventListener("click", prevImage);

    // Click on dark background to close
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Click on lightbox image to go to next image
    lightboxImg.addEventListener("click", nextImage);

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "flex" || lightbox.style.display === "flex") {
            switch(e.key) {
                case "ArrowRight":
                case " ":
                    e.preventDefault();
                    nextImage();
                    break;
                case "ArrowLeft":
                    prevImage();
                    break;
                case "Escape":
                    closeLightbox();
                    break;
            }
        }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            nextImage();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevImage();
        }
    }, { passive: true });
});

/*################ projekte.html #########################*/
// Select all cards

const pages = [
    "Gewerbe+Industrie.html",
    "Dachausbau+Revitalisierung.html",
    "Wohnbau+bildung.html"
];

document.querySelectorAll(".project_card").forEach((card, i) => {
    card.addEventListener("click", () => {
        window.location.href = pages[i];
    });
});




/* ################ Hollerschmid.html ######################## */

document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const leftArrow = document.querySelector(".lightbox-arrow.left");
    const rightArrow = document.querySelector(".lightbox-arrow.right");
    const mainImageContainer = document.querySelector(".main-image-container");

    if (!galleryImages.length || !lightbox || !lightboxImg || !mainImageContainer) {
        console.warn("Gallery or lightbox not found!");
        return;
    }

    let currentIndex = 0;

    /* 👉 CLICK MAIN IMAGE (mobile-safe) */
    mainImageContainer.addEventListener("click", () => {
        currentIndex = 0; // open gallery from first image
        lightboxImg.src = galleryImages[currentIndex].src;
        lightbox.style.display = "flex";
        document.body.classList.add("no-scroll");
    });

    /* Gallery thumbnails (hidden but used for navigation) */
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
            document.body.classList.add("no-scroll");
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.classList.remove("no-scroll");
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    });

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    });

});


/*######################################################################*/
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Contact - S+R</title>
//     <!-- Include the same stylesheets as your main page -->
//     <link rel="stylesheet" href="style.css">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
//     integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
// </head>
// <body>
   
//      <div class="lines-container" id="linesContainer"></div>
//      <div style="min-height: 100vh;">
//   <div class="nav-container">
//         <div class="header-container">
//             <div class="logo">
//                <a href="/">
//                    <img src="logos/first_logo_.png" alt="SR+" class="logo">
//                </a>
//            </div>
//          <div class="nav">
//         <button class="hamburger" id="nav-toggle" aria-label="Toggle navigation">
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
// <ul class="nav-list" id="nav-list">
//     <li class="nav-item project-link">
//         <a href="projekte.html" class="project-link">Projekte</a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="gewerbe-industrie.html">Gewerbe + Industrie</a></li>
//             <li><a class="dropdown-item" href="dachausbau-revitalisierung.html">Dachausbau + Revitalisierung</a></li>
//             <li><a class="dropdown-item" href="wohnbau-bildung.html">Wohnbau + Bildung</a></li>
//         </ul>
//     </li>

//     <li class="nav-item firm-link">
//         <a href="firmenprofil.html" class="firm-link">Firmenprofil</a>
//     </li>

//     <li class="nav-item contact-link">
//         <a href="kontakt.html" class="contact-link">Kontakt</a>
//     </li>
// </ul>
//     </div>   
//        </div>
//     </div> 
// <div class="gi-container">
//   <div class="project-header">
//     <div class="image-wrapper">
//       <img src="image/Header.jpg" class="card1-img-top" alt="Gewerbe + Industrie">
//     </div>
//   </div>
// </div>

// <section class="lorem">
//   <div class="paragraph">
//     <p class="project-description">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br>
//         Minus at repellendus est deleniti culpa enim,<br>
//         esse quaerat accusamus dolore quae commodi sit atque <br>
//         laudantium in facilis inventore vel totam ratione.
//     </p>
// </div>
// <div class="accord-container">
// <div class="accordion">
//   <div class="accordion-item">
//     <h6 class="accordion-header">Sed Quam</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur...</p>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
//   </div>
//   <div class="accordion-item">
//     <h6 class="accordion-header">Amet consectetur</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur.rerum atque 
//         molestias corrupti animi nulla repellat inventore.</p>
//       <br>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
//   </div>
//   <div class="accordion-item">
//     <h6 class="accordion-header">Mauris massa</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur, rerum atque molestias corrupti 
//       animi nulla repellat inventore.</p>
//       <br>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
//   </div>
//   <div class="accordion-item">
//     <h6 class="accordion-header">Etiam justo</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur...
//         rerum atque molestias corrupti animi nulla repellat inventore.
//       </p>
//       <br>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
// </div>
// </div>
// <br><br>
// <div class="title">
//   <h6>Dipl.Ing.
//     <br>
//     Konrad Reisenleithner
//   </h6>
//   <div id="cont">
//     +43 1 4816263 <br>
//     office@spreitzer-zt.at
//   </div>
// </div>
// </div>
// </section>
 
// <div class="cardi-container"> 
//   <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic1.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic2.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic3.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic4.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic5.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic6.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic7.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic8.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic10.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic11.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic12.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic13.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic14.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic15.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic16.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic17.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic18.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic20.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//     <div class="cardi active" style="width: 48rem;">
//     <img src="image/pic21.jpg" class="cardi-img-top" width="" alt="...">
//     <div class="cardi-body">
//       <p class="cardi-title"><strong>Gewerbe + Industrie</strong></p>
//       <p class="cardi-text">Some quick example text...</p>
//       <a href="bd_2023.html" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

// </div>

//  <footer class="longleg-container">
     
//         <section class="sec1">
//             <div class="leg-eaglet-wrapper">
//             <div class="leg">
//                 <img src="logos/first_logo_.png" alt="S+R">
//             </div>
//         <div id="eaglet">
//             <img src="logos/adler.img.png" alt="adler"> 
//         </div>
//     </div>
//         <div class="lsr"> 
//                 <h6 id="sp">
//                     Spreitzer <span>+</span> Reisenleitner <br>
//                     Ziviltechnikergesellschaft&nbsp;&nbsp;GmbH
//                 </h6>
        
//         <p>Mittersteig 10/1, 1050 Wien</p>
//         <p><span class="label">T:</span> +43 1 4816263</p>
//         <p>office@spreitzer-zt.at</p>
//     </div>

//         <div class="upper2">
//  <div class="company-section">
//    <h5 id="nav"> Unternehmen</h5>
//   <div class="links-container">
//     <a href="privacy.html" class="policy-link" data-content="privacy">Datenschutzerklärung</a>
//     <a href="imprint.html" class="policy-link" data-content="imprint">Impressum</a>
//     <a href="terms.html" class="policy-link" data-content="terms">Nutzungsbedingungen</a>
//   </div>
// </div>

// <div id="content-display" class="content-display"></div>
//         </div>
//     </div>
// </section>
//     </footer>
    
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
//     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
//     integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
// <script src="index.js"></script>
// </body>
// </html>


// #########################################
    // <div class="gallery-modal">
    //     <span class="close-gallery">&times;</span>
    //     <div class="gallery-container">
    //         <div class="gallery-slide active">
    //             <img src="image/pic5.jpg" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Gewerbe + Industrie</strong></p></div>
    //         </div>
    //                     <div class="gallery-slide">
    //             <img src="wohnbau+bild.pic/03 Neubaugürtel/DSC00319.JPG" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Dachausbau + Revitalisierung</strong></p></div>
    //         </div>
    //         <div class="gallery-slide">
    //             <img src="wohnbau+bild.pic/03 Neubaugürtel/IMG_20161215_085651.jpg" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Wohnbau + Bildung</strong></p></div>
    //         </div>
    //         <div class="gallery-slide">
    //             <img src="image/pic3.jpg" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Dachausbau + Revitalisierung</strong></p></div>
    //         </div>
    //         <div class="gallery-slide">
    //             <img src="wohnbau+bild.pic/03 Neubaugürtel/20240229_084213.jpg" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Wohnbau + Bildung</strong></p></div>
    //         </div>
    //                   <div class="gallery-slide active">
    //             <img src="wohnbau+bild.pic/03 Wehlistrasse/20211109_082757.jpg" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Gewerbe + Industrie</strong></p></div>
    //         </div>
    //                   <div class="gallery-slide active">
    //             <img src="image/pic10.jpg" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Dachausbau + Revitalisierung</strong></p></div>
    //         </div>
    //                   <div class="gallery-slide active">
    //             <img src="image/pic8.jpg" class="gallery-img">
    //             <div class="gallery-caption"><p><strong>Gewerbe + Industrie</strong></p></div>
    //         </div>
            
    //         <a class="prev">&#10094;</a>
    //         <a class="next">&#10095;</a>
    //     </div>
    // </div>
    // ###############
//       {# <section class="project_sectionG">
  
//       <a href="projekte.html">
//         <div class="project_card">
//   <img src="Bauder _GmbH_2023/20230417_124826.jpg" class="project_card-img-top" alt="...">
//       <div class="bdG_23_overlay">
//         <h5 class="bdG_23_overlay-title">Bauder GmbH</h5>
//         <p class="bdG_23_overlay-text">Auftraggeber: SET Bauprojektierung GmbH</p>
//         <p class="bdG_23_overlay-text">Jahr: 2023</p>
//       </div>
// </div>
// </a>

// <a href="projekte.html">
//         <div class="project_card">
//   <img src="Bauder _GmbH_2023/20230417_125349.jpg" class="project_card-img-top" alt="...">
//       <div class="bdG_23_overlay">
//         <h5 class="bdG_23_overlay-title">Bauder GmbH</h5>
//         <p class="bdG_23_overlay-text">Auftraggeber: SET Bauprojektierung GmbH</p>
//         <p class="bdG_23_overlay-text">Jahr: 2023</p>
//       </div>
// </div>
// </a>

// <a href="projekte.html">
//         <div class="project_card">
//   <img src="Bauder _GmbH_2023/20230508_131829.jpg" class="project_card-img-top" alt="...">
//       <div class="bdG_23_overlay">
//         <h5 class="bdG_23_overlay-title">Bauder GmbH</h5>
//         <p class="bdG_23_overlay-text">Auftraggeber: SET Bauprojektierung GmbH</p>
//         <p class="bdG_23_overlay-text">Jahr: 2023</p>
//       </div>
// </div>
// </a>

// <a href="projekte.html">
//         <div class="project_card">
//   <img src="Bauder _GmbH_2023/20230619_113340.jpg" class="project_card-img-top" alt="...">
//       <div class="bdG_23_overlay">
//         <h5 class="bdG_23_overlay-title">Bauder GmbH</h5>
//         <p class="bdG_23_overlay-text">Auftraggeber: SET Bauprojektierung GmbH</p>
//         <p class="bdG_23_overlay-text">Jahr: 2023</p>
//       </div>
// </div>
// </a>

// <a href="projekte.html">
//         <div class="project_card">
//   <img src="Bauder _GmbH_2023/20230703_150128.jpg" class="project_card-img-top" alt="...">
//       <div class="bdG_23_overlay">
//         <h5 class="bdG_23_overlay-title">Bauder GmbH</h5>
//         <p class="bdG_23_overlay-text">Auftraggeber: SET Bauprojektierung GmbH</p>
//         <p class="bdG_23_overlay-text">Jahr: 2023</p>
//       </div>
// </div>
// </a>

// <a href="projekte.html">
//         <div class="project_card">
//   <img src="Bauder _GmbH_2023/20230828_120413.jpg" class="project_card-img-top" alt="...">
//       <div class="bdG_23_overlay">
//         <h5 class="bdG_23_overlay-title">Bauder GmbH</h5>
//         <p class="bdG_23_overlay-text">Auftraggeber: SET Bauprojektierung GmbH</p>
//         <p class="bdG_23_overlay-text">Jahr: 2023</p>
//       </div>
// </div>
// </a>
//     </section> 
  



//     // ########################
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Contact - S+R</title>
//     <!-- Include the same stylesheets as your main page -->
//     <link rel="stylesheet" href="style.css">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
//     integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
// </head>
// <body>
//     <!-- Copy your header/navigation from the main page -->
//     <div class="lines-container">
//         <!-- Add as many lines as you want -->
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//         <div class="blue-line"></div>
//     </div>
//     <div class="nav-container">
//         <div class="header-container">
//             <div class="logo">
//                <a href="/">
//                    <img src="logos/first_logo_.png" alt="SR+" class="logo">
//                </a>
//            </div>
//  <div class="nav">
//         <button class="hamburger" id="nav-toggle" aria-label="Toggle navigation">
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
// <ul class="nav-list" id="nav-list">
//      <li class="nav-item project-link">
//         <a href="projekte.html" class="project-link">Projekte</a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="gewerbe-industrie.html">Gewerbe + Industrie</a></li>
//             <li><a class="dropdown-item" href="dachausbau-revitalisierung.html">Dachausbau + Revitalisierung</a></li>
//             <li><a class="dropdown-item" href="wohnbau-bildung.html">Wohnbau + Bildung</a></li>
//         </ul>
//     </li>
//     </li>

//     <li class="nav-item firm-link">
//         <a href="firmenprofil.html" class="firm-link">Firmenprofil</a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="gewerbe-industrie.html">Gewerbe + Industrie</a></li>
//             <li><a class="dropdown-item" href="dachausbau-revitalisierung.html">Dachausbau + Revitalisierung</a></li>
//             <li><a class="dropdown-item" href="wohnbau-bildung.html">Wohnbau + Bildung</a></li>
//         </ul>
//     </li>

//     <li class="nav-item contact-link">
//         <a href="kontakt.html" class="contact-link">Kontakt</a>
//     </li>
// </ul>
//     </div>      
//        </div>
//     </div>


// <section class="lorem">
//   <div class="paragraph">
//     <p class="project-description">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br>
//         Minus at repellendus est deleniti culpa enim,<br>
//         esse quaerat accusamus dolore quae commodi sit atque <br>
//         laudantium in facilis inventore vel totam ratione.
//     </p><br><br>
//     <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore <br>eius itaque, sint ullam assumenda 
//         <br>modi obcaecati quo pariatur doloribus nisi quam veniam omnis <br>explicabo eaque soluta ipsa exercitationem!<br> 
//         Ad, voluptatum?
//         ipsum
//         Lorem ipsum dolor sit amet consectetur. <br>Ut porta orci sit quis <br>
//          lorem faucibus laoreet.        
//         ipsum Lorem ipsum dolor sit amet<br> consectetur adipisicing elit. <br>
//         Neque quis possimus aliquam quibusdam iste <br>
//         provident maxime quo 
//         <br><br>
//         ea expedita blanditiis! Odit suscipit <br>
//         rerum atque molestias corrupti animi nulla repellat inventore. <br>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis<br> 
//         amet quis nobis aspernatur ipsam facilis repellendus <br>
//         delectus. Earum cumque illo dolor, sapiente, voluptates quas molestiae<br>
//          facere nemo soluta, voluptatum repellendus?
//             <br><br>
//         ea expedita blanditiis! Odit suscipit <br>
//         rerum atque molestias corrupti animi nulla repellat inventore. <br>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis <br>
//         amet quis nobis aspernatur ipsam facilis repellendus <br>
//         delectus. Earum cumque illo dolor, sapiente, voluptates quas molestiae<br>
//          facere nemo soluta, voluptatum repellendus?
//     </p>
// </div>
// <div class="accord-container">
// <div class="accordion">
//   <div class="accordion-item">
//     <h6 class="accordion-header">Sed Quam</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur...</p>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
//   </div>
//   <div class="accordion-item">
//     <h6 class="accordion-header">Amet consectetur</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur.rerum atque 
//         molestias corrupti animi nulla repellat inventore.</p>
//       <br>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
//   </div>
//   <div class="accordion-item">
//     <h6 class="accordion-header">Mauris massa</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur, rerum atque molestias corrupti 
//       animi nulla repellat inventore.</p>
//       <br>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
//   </div>
//   <div class="accordion-item">
//     <h6 class="accordion-header">Etiam justo</h6> 
//     <div class="accordion-content">
//       <div class="accordion-content-inner">
//       <p>Lorem ipsum dolor sit amet consectetur...
//         rerum atque molestias corrupti animi nulla repellat inventore.
//       </p>
//       <br>
//       <ul>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//         <li>Attis arcu gravida habitant</li>
//       </ul>
//     </div>
//   </div>
// </div>
// </div>
// <br><br>
// <div class="title">
//   <h6>Dipl.Ing.
//     <br>
//     Konrad Reisenleithner
//   </h6>
//   <div id="cont">
//     +43 1 4816263 <br>
//     office@spreitzer-zt.at
//   </div>
// </div>
// </div>
// </section>

//  <footer class="longleg-container">
     
//         <section class="sec1">
//             <div class="leg-eaglet-wrapper">
//             <div class="leg">
//                 <img src="logos/first_logo_.png" alt="S+R">
//             </div>
//         <div id="eaglet">
//             <img src="logos/adler.img.png" alt="adler"> 
//         </div>
//     </div>
//         <div class="lsr"> 
//                 <h6 id="sp">
//                     Spreitzer <span>+</span> Reisenleitner <br>
//                     Ziviltechnikergesellschaft&nbsp;&nbsp;GmbH
//                 </h6>
        
//         <p>Mittersteig 10/1, 1050 Wien</p>
//         <p><span class="label">T:</span> +43 1 4816263</p>
//         <p>office@spreitzer-zt.at</p>
//     </div>

//         <div class="upper2">
//  <div class="company-section">
//    <h5 id="nav"> Unternehmen</h5>
//   <div class="links-container">
//     <a href="privacy.html" class="policy-link" data-content="privacy">Datenschutzerklärung</a>
//     <a href="imprint.html" class="policy-link" data-content="imprint">Impressum</a>
//     <a href="terms.html" class="policy-link" data-content="terms">Nutzungsbedingungen</a>
//   </div>
// </div>

// <div id="content-display" class="content-display"></div>
//         </div>
//     </div>
// </section>
//     </footer>
    
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
//     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
//     integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
// <script src="index.js"></script>
// </body>
// </html>