

const hamBtn = document.getElementById("hamburger");
const body = document.getElementById("body");

function toggleMenu(){
    body.classList.toggle("menu-is-open");
}

hamBtn.addEventListener("click", toggleMenu);

$(document).ready(function (){
$('.your-class').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="slick-arrow-next icon-arrow-next"></button>',
    prevArrow: '<button type="button" class="slick-arrow-prev icon-arrow-prev"></button>',
    pauseOnHover: false,
    dots: true,
  });
});