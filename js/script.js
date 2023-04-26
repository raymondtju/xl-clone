// Fixed Navbar
const navbar = document.querySelector(".secNav");
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos >= navbarOffsetTop + 42) {
    navbar.classList.add("navbar--fixed");
  } else {
    navbar.classList.remove("navbar--fixed");
  }
});

// Carousel
const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelector(".carouselImage img");
const carouselButtons = document.querySelectorAll(
  ".carousel .carouselDots div"
);
const carouselText = document.querySelector(".carouselText span");

const imgMobile = [
  "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/77a1755e-8e1d-45c6-95c4-9c033616c8ad.jpg",
  "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/7158d8df-efa8-4839-9369-327c6bfc0637.jpg",
  "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/feecb4a6-65d9-457b-a1b7-57727a456331.jpg",
  "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/2114cf72-34bf-456b-a5a0-8d1422536315.jpg",
  "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/39fd4e06-e80b-4ee4-9a1c-06b53f220175.jpg",
  "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/e0a19e3a-0992-4bab-9f99-f559f92396fd.jpg",
];

const data = [
  {
    img: "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/2a9f4473-a059-48dc-8766-071571a2094a.jpg",
    title: "Cek Promo",
  },
  {
    img: "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/d56a6e6b-0a5f-472c-8498-9b46fba0b069.jpg",
    title: "Selengkapnya",
  },
  {
    img: "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/4b2f2676-7ed5-4d64-a8e4-16ee67a7b0d3.jpg",
    title: "Beli Sekarang",
  },
  {
    img: "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/747af065-5a15-42ba-8893-b414480fb0b2.jpg",
    title: "Selengkapnya",
  },
  {
    img: "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/9fca1310-8e76-47f4-866f-78cb00dd2926.jpg",
    title: "Beli eSIM Sekarang",
  },
  {
    img: "https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/cbe88701-dd45-4a0e-af4c-064f3b0898e4.jpg",
    title: "Klik Disini",
  },
];

let position = 0;
let interval = 5000;

const updateCarousel = (position) => {
  interval = 0;
  carouselImages.classList.add("carouselImage--exit");
  carouselButtons.forEach((div) => {
    div.style.backgroundColor = "aliceblue";
  });
  carouselButtons[position].style.backgroundColor = "var(--light-green)";
  carouselText.textContent = `${data[position].title} >`;

  setTimeout(() => {
    carouselImages.classList.remove("carouselImage--exit");
    carouselImages.src = data[position].img;
  }, 200);
  interval = 5000;
};

setInterval(() => {
  position++;
  if (position === 5) {
    position = 0;
  }

  updateCarousel(position);
}, interval);

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    interval = 0;
    position = event.target.id;
    updateCarousel(position);
  });
});

