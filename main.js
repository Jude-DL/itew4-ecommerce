document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuToggle?.addEventListener("click", () => {
        mobileMenu?.classList.toggle("active");
    });

    // Dropdown Functionality (Desktop and Mobile)
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        dropdown.addEventListener("click", (e) => {
            // Prevent default only for the toggle link
            if (e.target === dropdown.querySelector("a")) {
                e.preventDefault();
                dropdownContent?.classList.toggle("show");
            }
        });
    });

    // Search Form Logic
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("product-search");
    const productsGrid = document.getElementById("products-grid");
    const productItems = productsGrid?.querySelectorAll(".product-item");

    searchForm?.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    searchInput?.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();
        productItems?.forEach((item) => {
            const productName = item.getAttribute("data-name")?.toLowerCase() || "";
            item.style.display = productName.includes(searchValue) ? "block" : "none";
        });
    });

    // Slider Logic
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".slider-dot");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentSlide = 0;
    const slideCount = document.querySelectorAll(".slide").length;
    let autoSlideInterval;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlidePosition();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            updateSlidePosition();
            resetAutoSlide();
        });
    });

    prevBtn?.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    nextBtn?.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
});