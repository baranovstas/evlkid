'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // табы
  const tabBtns = document.querySelectorAll('.how__link');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', showTabs);
  });
  function showTabs() {
    const ind = [...tabBtns].indexOf(this);
    const tabBlocks = document.querySelectorAll('.how__desc');
    tabBlocks.forEach((block, i) => {
      switch (ind) {
        case i:
          block.classList.add('how__desc-active');
          tabBtns[i].classList.add('how__link-active');
          break;
        default:
          block.classList.remove('how__desc-active');
          tabBtns[i].classList.remove('how__link-active');
          break;
      }
    });
  }

  // свайпер
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

  // аккордеон
  $(function () {
    $("#accordion").accordion({
      active: false,
      collapsible: true
    });
  });

  // бургер
  let menu = document.querySelector('.menu');

  document.querySelector('.burger').addEventListener("click", function () {
    menu.classList.toggle('is-active');
    document.querySelector(".close").addEventListener("click", function () {
      document.querySelector(".menu").classList.remove("is-active");
    });
  });

  menu.addEventListener("transitionend", function () {
    if (!menu.classList.contains('is-active')) {
      menu.removeAttribute('style');
    }
    else {
      menu.style = "visibility: visible";
    }
  });

  // ЯКОРЯ
  const anchors = document.querySelectorAll('a[href*="#"]')

  function setSmoothScroll(target, duration) {
    const elem = document.querySelector(target);
    const targetPosition = elem.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const progress = currentTime - startTime;
      const run = easeInOutCubic(progress, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };

    requestAnimationFrame(animation);
  }

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      setSmoothScroll(href, 1000);
    });
  });

});
