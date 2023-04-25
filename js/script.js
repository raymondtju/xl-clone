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
