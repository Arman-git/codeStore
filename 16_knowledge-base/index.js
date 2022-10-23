const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
  });

// Функция ymaps.ready() будет вызвана, когда
            // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
            ymaps.ready(init);
            function init(){
                // Создание карты.
                var myMap = new ymaps.Map("map", {
                    // Координаты центра карты.
                    // Порядок по умолчанию: «широта, долгота».
                    // Чтобы не определять координаты центра карты вручную,
                    // воспользуйтесь инструментом Определение координат.
                    center: [48.872185, 2.354224],
                    // Уровень масштабирования. Допустимые значения:
                    // от 0 (весь мир) до 19.
                    zoom: 16
                });



var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
  iconLayout: 'default#image',
  iconImageHref: './img/Subtract.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-3, -42]
});

myMap.geoObjects.add(myPlacemark);

};


var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999 99 99");

im.mask(selector);

new JustValidate('#forms', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true,
    },

  },
  messages: {
    name: {
      minLength: 'Вы не ввели имя'
    },
    email: 'Вы не ввели e-mail'
  },
});




tippy ("#svg_tooltip", {
  content: 'Глава 2, страница 176',
  offset: [0, 12],
  arrow: true,
  arrowType: 'narrow',
  maxWidth: 163,
});



