document.querySelectorAll('.how__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.how__desc').forEach(function (tabContent) {
      tabContent.classList.remove('how__desc-active');
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('how__desc-active');
  })
})

const swiper = new Swiper('.swiper-container', {
  loop: true,

  IOSEdgeSwipeDetection: true,

  onTouchStart: function () {
    return false;
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function () {
  $("#accordion").accordion({
    active: false,
    collapsible: true
  });
});

let menu = document.querySelector('.menu');

document.querySelector('.burger').addEventListener("click", function () {
  menu.classList.toggle('is-active');
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("is-active");
  })
})

menu.addEventListener("transitionend", function () {
  if (!menu.classList.contains('is-active')) {
    menu.removeAttribute('style');
  }
  else {
    menu.style = "visibility: visible";
  }
})