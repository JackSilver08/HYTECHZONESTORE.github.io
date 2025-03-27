document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!slider || !prevBtn || !nextBtn || slides.length === 0) {
    console.error("Slider elements not found!");
    return;
  }

  let currentIndex = 0;
  const totalSlides = slides.length;
  let isTransitioning = false;

  // Cập nhật kích thước slide tự động
  function updateSlideSize() {
    const sliderContainer = slider.parentElement; // Lấy phần tử cha của slider
    const containerWidth = sliderContainer.offsetWidth; // Lấy kích thước container

    slides.forEach((slide) => {
      slide.style.width = `${containerWidth}px`; // Đảm bảo slide vừa với container
    });

    slider.style.width = `${containerWidth * totalSlides}px`; // Đảm bảo slider đủ rộng
  }

  // Gọi hàm này khi load trang
  updateSlideSize();
  window.addEventListener("resize", updateSlideSize); // Cập nhật khi thay đổi kích thước màn hình

  function updateSlider() {
    if (isTransitioning) return;
    isTransitioning = true;

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    setTimeout(() => {
      isTransitioning = false;
    }, 500); // Khớp với CSS transition
  }

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 3000);
});
fetch("/header.html");
