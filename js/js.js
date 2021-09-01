$(document).ready(function () {
  var currentFloor = 2; // Переменная с текущим этажом
  var floorPath = $(".home-image path"); // Каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /*Кнопка увеличения этажа*/
  var counterDown = $(".counter-down"); /*Кнопка уменьшения этажа*/
  var modal = $(".modal"); /*модальное окно*/
  var modalCloseButton = $(".modal-close-button"); /*Кнопка закрытия модального окна*/
  var viewFlatsButton = $(".view-flats"); /*Кнопка для просмотра этажей*/

  //функция при наведении мышкой на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //Удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //Получаем значение текущего этажа
    $(".counter").text(currentFloor); // Записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); /*При клике на этаж вызвать окно */
  modalCloseButton.on("click", toggleModal); /*При клике на крест закрыть окно */
  viewFlatsButton.on("click", toggleModal); /*При клике на кнопку вызова этажа вызвать окно */

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    // Проверяем значение этажа (не должно быть больше 18)
    if (currentFloor < 18) {
      currentFloor++; // Прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("ru-RU", { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную к виду 01,02 и т.д.
      $(".counter").text(usCurrentFloor); // Записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); //Удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
    }
  });

  // отслеживаем клик по кнопке вниз
  counterDown.on("click", function () {
    // Проверяем значение этажа (должно быть больше 02)
    if (currentFloor > 02) {
      currentFloor--; // Отнимаем один этаж
      usCurrentFloor = currentFloor.toLocaleString("ru-RU", { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную к виду 01,02 и т.д.
      $(".counter").text(usCurrentFloor); // Записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); //Удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
    }
  });
  // функция открыть-закрыть окно
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
