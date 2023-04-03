$(".accordion").accordion({
    heightStyle: "content", 
    active: false,
    collapsible:true,
    animate: 500,
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // slidesPerView: 4,
    // slidesPerGroup: 4,
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is < 320px
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 11,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1025: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });

  let search__icon = document.querySelector('.search__icon');
  let search__input = document.querySelector('.search__input');

  search__icon.onclick = function() {

    search__input.classList.toggle('search__input-active');

  };


  const element = document.querySelector('.content__one-descr');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("modal__close-x")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.body.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelector('.modal__close-x').click();
  }
});

// Используем метод focus() для установки фокуса
function showModal() {
  let modal = document.getElementById('about__form');
  modal.focus();
}


const validator = new JustValidate(document.querySelector('#about-form'));

validator 
.addField(document.querySelector('#textarea-id'), [
  {
    rule: 'required',
    errorMessage: 'Введите текст'
  },
  {
    rule: 'maxLength',
    value: 100,
    errorMessage: 'Максимальное количество знаков - 100'
  },
  {
    rule: 'minLength',
    value: 10,
    errorMessage: 'миниимальное количество знаков - 10'
  },
])
.addField(document.querySelector('#name-id'), [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'customRegexp',
      value: /[a-z, A-Z]/,
      errorMessage: 'Ошибка',
    }
  ])
  .addField(document.querySelector('#email_id'), [
    {
      rule: 'required',
      errorMessage: 'Введите email'
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат email'
    },
  ]);


const stationBtn = document.querySelectorAll('.station__button');

stationBtn.forEach(e => {
  e.addEventListener('click', function(){

e.firstElementChild.classList.toggle('svg-hidden')
e.firstElementChild.classList.toggle('svg-visible')
e.lastElementChild.classList.toggle('svg-visible')
  })
})


  let burger = document.querySelector('.burger__menu');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.item__link');
  let menuBottom = document.querySelector('.header__bottom-list');
  let menuLinksBottom = menu.querySelectorAll('.bottom__list-item-link');

  burger.addEventListener('click', 

  function() {

      burger.classList.toggle('burger--active');

      menu.classList.toggle('header__nav--active');

      document.body.classList.toggle('stop-scroll');

      menuBottom.classList.toggle('header__bottom-list--active');

  })
  
  menuLinks.forEach(function (el) {
    el.addEventListener('click', 
    function() {

      burger.classList.remove('burger--active');

      menu.classList.remove('header_nav--active');

      document.body.classList.remove('stop-scroll');

      menuBottom.classList.add('header__bottom-list--active');

    });
  });

  const loadMore = document.querySelector('.load__more-btn');

  const podcastsLength = document.querySelectorAll('.podcasts__list-item').length;

  let items = 4;

  loadMore.addEventListener('click', () => {
    items += 1;
    const array = Array.from(document.querySelector('.podcasts__list').children);
    const visItems = array.slice(0, items);
  
    visItems.forEach(el => el.classList.add('is-visible'));
  
    if (visItems.length === podcastsLength) {
      loadMore.style.display = 'none';
    }
  });

  // if (window.innerWidth <= 414) {

  //   let el = document.querySelector('.stations__list');


  //   el.classList.add("dropdown");
  //  }
   

   $(document).ready(function() {
    function checkWidth() {
      let windowWidth = $('body').innerWidth(),
          elem = $(".stations__list"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
          stationListTitle = $(".station__list-title");
          dropdownMenu = $(".dropdown__menu");
          station = $('.station');
          // страницу для поиска нужного элемента
      if(windowWidth <= 414){
        elem.addClass('dropdown');
        stationListTitle.addClass('btn');
        stationListTitle.addClass('btn-secondary');
        stationListTitle.addClass('dropdown-toggle');
        dropdownMenu.addClass('dropdown-menu');
        station.addClass('dropdown-item');
      }
      else{
        elem.removeClass('dropdown');
        stationListTitle.removeClass('btn');
        stationListTitle.removeClass('btn-secondary');
        stationListTitle.removeClass('dropdown-toggle');
        dropdownMenu.removeClass('dropdown-menu');
        station.removeClass('dropdown-item');

      }
    }
  
    checkWidth(); // проверит при загрузке страницы
  
    $(window).resize(function(){
      checkWidth(); // проверит при изменении размера окна клиента
    });
  });

