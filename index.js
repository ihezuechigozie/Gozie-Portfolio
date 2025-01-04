let currentSlide = 0;
const slides = document.querySelectorAll('.slideShow-container > div');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}


function showNextSlide() {
  nextSlide();
}

function showPrevSlide() {
  prevSlide();
}

setInterval(nextSlide, 8000);
showSlide(currentSlide);

document.getElementById('next').addEventListener('click', showNextSlide);
document.getElementById('prev').addEventListener('click', showPrevSlide);


function toggleDropdown(dropdownId, arrowDownId = null, arrowUpId = null) {
  let dropdown = document.getElementById(dropdownId);
  let arrowDown = arrowDownId ? document.getElementById(arrowDownId) : null;
  let arrowUp = arrowUpId ? document.getElementById(arrowUpId) : null;

  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
    if (arrowDown) arrowDown.style.display = "none";
    if (arrowUp) arrowUp.style.display = "block";
  } else {
    dropdown.style.display = "none";
    if (arrowDown) arrowDown.style.display = "block";
    if (arrowUp) arrowUp.style.display = "none";
  }
}




function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const sections = document.querySelectorAll('.searchable');
  
  let found = false;

  sections.forEach(section => {
    if (section.innerText.toLowerCase().includes(query)) {
      section.style.backgroundColor = 'yellow'; 
      found = true;
    } else {
      section.style.backgroundColor = ''; 
    }
  });

  if (!found) {
    alert('No results found!');
  }
}
let scrollTopBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function() {
    const totalHeight = document.documentElement.scrollHeight;
    const currentScrollPos = window.innerHeight + window.scrollY;
    if (totalHeight - currentScrollPos < 7500) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
    };
    scrollTopBtn.onclick = function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

