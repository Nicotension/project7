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

// ####################
/* <div class="gi-container">
  <div class="project-header">
    <div class="image-wrapper">
      <img src="Bauder _GmbH_2023/20230417_125349.jpg" class="card1-img-top" alt="dachausbau-revitalisierung">
      <div class="image-overlay">
        <h3 style="margin: 0 0 5px 0;">Dachausbau + Revitalisierung</h3>
        <p style="margin: 0;">ipsum Lorem ipsum dolor sit amet<br> consectetur adipisicing elit. <br>
        Neque quis possimus aliquam quibusdam iste <br>
        provident maxime quo </p>
      </div>
    </div>
  </div>
</div> */
/* ##################### */