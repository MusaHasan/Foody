let menu = document.querySelector("#manu-bars"); // For manue bar on (max-width: 768px) start
let navbar = document.querySelector(".navbar");
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header .navbar a");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active"); // For manue bar on (max-width: 768px) end

  section.forEach((element) => {
    let top = window.scrollY;
    let height = element.offsetHeight;
    let offset = element.offsetTop - 150;
    let id = element.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  }); // For manue bar active on scroll
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
}; // For Search system start

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
}; // For Search system end

// Initialize Swiper
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 3,
    },
  },
}); // Initialize Swiper end

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 2000);
}

window.onload = fadeOut;
