const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,   
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  // document.querySelectorAll(".swiper-pagination-bullet").forEach(function(element) {
  //   element.style.width = "15px";
  // });
  // document.querySelectorAll(".swiper-pagination-bullet").forEach(function(element) {
  //   element.style.height = "15px";
  // });
  // document.querySelectorAll(".swiper-pagination-bullet").forEach(function(element) {
  //   element.style.margin = "0 10px";
  // });
 
  // document.querySelector(".swiper-pagination-bullets.swiper-pagination-horizontal").style.bottom = "18px";



  let howTabsItem = document.querySelectorAll('.how_tabs_item');
  let itemContent = document.querySelectorAll('.how_tabs_content_block');

  howTabsItem.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      howTabsItem.forEach(function(btn){btn.classList.remove('how_tabs_item__btn--active')});
      e.currentTarget.classList.add('how_tabs_item__btn--active');

      itemContent.forEach(function(element){element.classList.remove('how_tabs_content_block_item_1--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('how_tabs_content_block_item_1--active');
    });
  });

  $(".accordion").accordion({
    heightStyle: "content", 
    active: false,
    collapsible:true,
    animate: 500,
  });

  // document.querySelectorAll(".ui-icon").forEach(function(element) {
  //   element.style.display = "none";
  // });

  // document.querySelectorAll("ui-state-default").forEach(function(element) {
  //   element.style.padding = "0";
  // });
  // document.querySelectorAll(".ui-state-default").forEach(function(element) {
  //   element.style.margin = "0";
  // });
  // document.querySelectorAll('.ui-state-default').forEach(function(element) {
  //   element.style.background = "white";
  // });
  // document.querySelectorAll('.ui-state-default').forEach(function(element) {
  //   element.style.border = "none";
  // });
  // document.querySelectorAll('.ui-widget-content').forEach(function(element) {
  //   element.style.border = "none";
  // });
  // document.querySelectorAll('.ui-accordion .ui-accordion-header').forEach(function(element) {
  //   element.style.padding = "0";
  // });
  // document.querySelectorAll('.ui-accordion .ui-accordion-content').forEach(function(element) {
  //   element.style.padding = "0";
  //   element.style.paddingTop = "30px";
  //   element.style.maxWidth = "1003px";
  // });
  // document.querySelectorAll('.ui-accordion .ui-accordion-header').forEach(function(element) {
  //   element.style.display = "flex";
  //   element.style.alignItems = "center";
  //   element.style.justifyContent = "space-between";
  // });
  // document.querySelectorAll('ui-accordion-header-active').forEach(function(element) {
  //   element.style.padding = "0";
  // });


  let icon = document.querySelector('.icon');
  let search = document.querySelector('.search');
  let clear = document.querySelector('.close__search');

  icon.onclick = function() {

    search.classList.toggle('search--active');

  };


  clear.onclick = function() {

    search.classList.toggle('search--active');

    // document.getElementById('searchClear').value = '';

  };






 let burger = document.querySelector('.burger');
 let menu = document.querySelector('.header_nav');
 let menuLinks = menu.querySelectorAll('.header_nav_list_item_link');

  burger.addEventListener('click', 

  function() {

      burger.classList.toggle('burger--active');

      menu.classList.toggle('header_nav--active');

      document.body.classList.toggle('stop-scroll');

  })
  
  menuLinks.forEach(function (el) {
    el.addEventListener('click', 
    function() {

      burger.classList.remove('burger--active');

      menu.classList.remove('header_nav--active');

      document.body.classList.remove('stop-scroll');

    });
  });


  




