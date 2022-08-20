const overlay = document.querySelector('.overlay')
const navSearch = document.querySelector('.fa-search')
const closeOverlay = document.querySelector('.closebtn')
const navİcon = document.getElementById("nav-icon3")
const angle = document.querySelector(".menu-item-has-children i")
const subMenu = document.querySelector(".sub-menu")
const globalIcon = document.querySelector(".fa-globe")
const globalsubMenu = document.querySelector(".global-sub-menu")
const benefits = document.querySelector(".benefits-left-title")
var num = 200; //number of pixels before modifying styles

$(document).ready(function () {
  navSearch.addEventListener('click', () => {

    overlay.style.top = "0";

  })


  closeOverlay.addEventListener('click', () => {

    overlay.style.top = "-100%";

  })

  $(".harf-siniri").text(function () {
    return $(this).text().length > 80 ? $(this).text().substr(0, 80) + '..' : $(this).text();
  });
  $(".harf-siniri-2").text(function () {
    return $(this).text().length > 220 ? $(this).text().substr(0, 220) + '..' : $(this).text();
  });

  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
    $('.mobile-nav > ul').slideToggle("slow");


  });

  $('.menu-item-has-children .fa-angle-right').click(function () {
    $(this).next('.sub-menu').slideToggle("slow");
    $(this).toggleClass("rotate-i")
  });


  $(globalIcon).click(function () {
    $(globalsubMenu).toggleClass('global-open');


  });








})