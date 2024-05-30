 let currentSlide = 1;
  const totalSlides = 19;

  function showSlide(slideIndex) {
    if (slideIndex > totalSlides) { currentSlide = 1; }
    if (slideIndex < 1) { currentSlide = totalSlides; }
    document.getElementById(`slide-btn-${currentSlide}`).checked = true;
  }

  function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
  }

  function setInt() {
    // This function resets the currentSlide variable based on the manually selected radio button
    for (let i = 1; i <= totalSlides; i++) {
      if (document.getElementById(`slide-btn-${i}`).checked) {
        currentSlide = i;
        break;
      }
    }
  }

//  =======
document.addEventListener("DOMContentLoaded", function () {
  const productsGrid = document.getElementById("products-grid");
  const loadMoreProductsButton = document.getElementById("load-more-products");

  // Array of product data
  const products = [
    {
      img: "img/pro1.png",
      title: "Bouncy & Slides",
      link: "/service_14/service14.html",
    },
    {
      img: "/img/pro2.png",
      title: "Balloon Decor",
      link: "/service_07/service7.html",
    },
    {
      img: "/img/pro3.png",
      title: "Birthday Packages",
      link: "/service_03/service3.html",
    },
    {
      img: "/img/pro4.png",
      title: "Magic Show",
      link: "/service_09/service9.html",
    },
    {
      img: "/img/pro5.png",
      title: "Face Painting & Balloon Bending",
      link: "/service_02/service2.html",
    },
    {
      img: "/img/pro6.png",
      title: "Popcorn & Cotton Candy",
      link: "/service_01/service1.html",
    },
    {
      img: "/img/pro8.png",
      title: "Kids Furniture",
      link: "/service_15/service15.html",
    },
    {
      img: "/img/pro9.png",
      title: "Bubble Show",
      link: "/service_05/service5.html",
    },
    {
      img: "/img/pro12.png",
      title: "Fire Show",
      link: "/service_12/service12.html",
    },
    {
      img: "/img/pro13.png",
      title: "Games for Kids",
      link: "/service_08/service8.html",
    },
    {
      img: "/img/pro15.png",
      title: "Pony Horse Ride & Camel Ride",
      link: "/service_10/service10.html",
    },
    {
      img: "/img/pro17.png",
      title: "Cartoon Mascots",
      link: "/service_06/service6.html",
    },
  ];

  let currentProductCount = 0;
  const productsToShowInitially = 17;
  const productsToLoadMore = 17;

  // Function to load products
  function loadProducts(count) {
    for (let i = currentProductCount; i < currentProductCount + count && i < products.length; i++) {
      const product = products[i];
      const productCard = document.createElement("li");
      productCard.classList.add("cards_item");
      productCard.innerHTML = `
        <div class="card">
          <a href="${product.link}" class="card_link" target="_blank">
            <div class="card_image">
              <img src="${product.img}" />
            </div>
            <div class="card_content">
              <h2 class="card_title">${product.title}</h2>
            </div>
          </a>
        </div>
      `;
      productsGrid.appendChild(productCard);
    }
    currentProductCount += count;

    // Hide Load More button if all products are loaded
    if (currentProductCount >= products.length) {
      loadMoreProductsButton.style.display = "none";
    }
  }

  // Load initial set of products
  loadProducts(productsToShowInitially);

  loadMoreProductsButton.addEventListener("click", function () {
    loadProducts(productsToLoadMore);
  });
});




// SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW --> VALIDATION
if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
    navClose.style.top = '1.5rem';
  });
}

// MENU HIDE
if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
    navClose.style.top = '-100rem';
  });
}

// REMOVE MENU FROM MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// CHANGE HEADER BG-COLOR ON SCROLL
const header = document.getElementById('header');
window.addEventListener('scroll', function () {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});

// SCROLLUP --> SHOW ON SCROLL
window.addEventListener('scroll', function () {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
});


// CONTACT US

const inputs = document.querySelectorAll(".contact__container .input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// SCROLL REVEAL
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
// });

// sr.reveal('.home__header, section__title', { delay: 500 });
// sr.reveal('.home__footer', { delay: 600 });
// sr.reveal('.home__img', { delay: 800, origin: 'top' });
// sr.reveal(
//   '.sponser__img, .products__card, .footer__logo, .footer__content, .footer__copy',
//   { interval: 100, origin: 'top' }
// );
// sr.reveal('.specs__data, .discount__animate', {
//   interval: 100,
//   origin: 'left',
// });
// sr.reveal('.specs__img,  .discount__img', { origin: 'right' });
// sr.reveal('.case__img', { origin: 'top' });
// sr.reveal('.case__data');

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal('.home__header, section__title', { delay: 500 });
sr.reveal('.home__footer', { delay: 600 });
sr.reveal('.home__img', { delay: 800, origin: 'top' });
sr.reveal(
  '.sponser__img, .products__card, .footer__logo, .footer__content, .footer__copy',
  { interval: 100, origin: 'top' }
);

sr.reveal('.animate', { origin: 'left', distance: '20px', interval: 200 });

