var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  const menu = document.getElementById("menu");
  const menuIcon = document.getElementById("hamburger");

  function hamburger() {
    menu.classList.toggle("open-menu");

    if( menuBtn.classList.contains("open-menu")){
        menuIcon.src="open (1).png"
    }

    else{
        menuIcon.src="close.png"
    }
  }