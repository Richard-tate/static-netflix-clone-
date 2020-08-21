const gap = 16;

const carousel = document.getElementById("carousel-1"),
  content = document.getElementById("content-1"),
  next = document.getElementById("next-1"),
  prev = document.getElementById("prev-1");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


const carousel2 = document.getElementById("carousel-2"),
  content2 = document.getElementById("content-2"),
  next2 = document.getElementById("next-2"),
  prev2 = document.getElementById("prev-2");

next2.addEventListener("click", e => {
  carousel2.scrollBy(width + gap, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width - gap <= carousel2.scrollLeft + width) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width + gap), 0);
  if (carousel2.scrollLeft - width - gap <= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth - width - gap <= carousel2.scrollLeft + width) {
    next2.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width = carousel2.offsetWidth));

const carousel3 = document.getElementById("carousel-3"),
  content3 = document.getElementById("content-3"),
  next3 = document.getElementById("next-3"),
  prev3 = document.getElementById("prev-3");

next3.addEventListener("click", e => {
  carousel3.scrollBy(width + gap, 0);
  if (carousel3.scrollWidth !== 0) {
    prev3.style.display = "flex";
  }
  if (content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
    next3.style.display = "none";
  }
});
prev3.addEventListener("click", e => {
  carousel3.scrollBy(-(width + gap), 0);
  if (carousel3.scrollLeft - width - gap <= 0) {
    prev3.style.display = "none";
  }
  if (!content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
    next3.style.display = "flex";
  }
});

let width3 = carousel3.offsetWidth;
window.addEventListener("resize", e => (width = carousel3.offsetWidth));


const carousel4 = document.getElementById("carousel-4"),
  content4 = document.getElementById("content-4"),
  next4 = document.getElementById("next-4"),
  prev4 = document.getElementById("prev-4");

next4.addEventListener("click", e => {
  carousel4.scrollBy(width + gap, 0);
  if (carousel4.scrollWidth !== 0) {
    prev4.style.display = "flex";
  }
  if (content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
    next3.style.display = "none";
  }
});
prev4.addEventListener("click", e => {
  carousel4.scrollBy(-(width + gap), 0);
  if (carousel4.scrollLeft - width - gap <= 0) {
    prev4.style.display = "none";
  }
  if (!content4.scrollWidth - width - gap <= carousel4.scrollLeft + width) {
    next4.style.display = "flex";
  }
});

let width4 = carousel4.offsetWidth;
window.addEventListener("resize", e => (width = carousel4.offsetWidth));

const carousel5 = document.getElementById("carousel-5"),
  content5 = document.getElementById("content-5"),
  next5 = document.getElementById("next-5"),
  prev5 = document.getElementById("prev-5");

next5.addEventListener("click", e => {
  carousel5.scrollBy(width + gap, 0);
  if (carousel5.scrollWidth !== 0) {
    prev5.style.display = "flex";
  }
  if (content5.scrollWidth - width - gap <= carousel5.scrollLeft + width) {
    next5.style.display = "none";
  }
});
prev5.addEventListener("click", e => {
  carousel5.scrollBy(-(width + gap), 0);
  if (carousel5.scrollLeft - width - gap <= 0) {
    prev5.style.display = "none";
  }
  if (!content5.scrollWidth - width - gap <= carousel5.scrollLeft + width) {
    next5.style.display = "flex";
  }
});

let width5 = carousel5.offsetWidth;
window.addEventListener("resize", e => (width = carousel5.offsetWidth));


function myFunction(imgs){
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById('imgtext');
  let imgTitle = document.getElementById('imgtitle');
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  imgTitle.innerHTML = imgs.title;
  expandImg.parentElement.style.display ="block";
}


  
