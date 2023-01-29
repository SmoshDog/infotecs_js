"use strict";

import { customers } from "./customers.js"; // Импорт базы данных клиентов

// Функция создания таблицы из базы данных клиентов
const createTable = (db) => {
  for (let i = 0; i < db.length; i++) {
    let row = `<tr onclick="showForm(${i})">
        <td id="fn-${i}">${db[i].name.firstName}</td>
        <td id="ln-${i}">${db[i].name.lastName}</td>
                        <td>
                        <div id="a-${i}" class = "table-about">${db[i].about}</div>
                        </td>
                        <td id="ec-${i}">${db[i].eyeColor}</td>
                        </tr>   
                        `;
    document.getElementById("t-body").innerHTML += row;
  }
};
// Использован цикл for (не for ... of) для использования индексов в процессе создания id для каждой клетки таблицы
// Создание таблицы
createTable(customers);

//  Функция для отображения окна формы и получения строки таблицы в которой проводятся изменения
window.showForm = (index) => {
  document.querySelector("#changesForm").style.display = "block";
  window.currentDt = index;
};
//  Функции по работе с формой

//  Клик по кнопке "сохранить"
document.querySelector(".submit").onclick = (event) => {
  event.preventDefault(); // Предотвращение обновления страницы
  replaceData(window.currentDt);
  document.querySelector("form").reset(); //Удаление данных из полей инпута
  document.querySelector("#changesForm").style.display = "none"; // Скрытие окна формы
};
//  Клик по кнопке "Отменить" (скрыть окно)
document.querySelector("button").onclick = () => {
  document.querySelector("#changesForm").style.display = "none";
};

//  Функция для замены данных в полях

const replaceData = (index) => {
  //  Значения из формы
  const fnForm = document.querySelector("#firstName").value;
  const lnForm = document.querySelector("#lastName").value;
  const aboutForm = document.querySelector("#about").value;
  const eyeColorForm = document.querySelector("#eyeColor").value;
  // Замена значений в таблице
  if (fnForm != "") {
    document.querySelector("#fn-" + index).textContent = fnForm;
  }
  if (lnForm != "") {
    document.querySelector("#ln-" + index).textContent = lnForm;
  }
  if (aboutForm != "") {
    document.querySelector("#a-" + index).textContent = aboutForm;
  }
  if (eyeColorForm != "") {
    document.querySelector("#ec-" + index).textContent = eyeColorForm;
  }
};

// Сортировка

window.sortTable = (n) => {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("customers-table"); // Сортируемая таблица
  switching = true;
  dir = "asc"; // Направление от "меньшего" к "большему"

  // Цикл, работающий до следующей смены направления сортировки

  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("tr");

    for (i = 1; i < rows.length - 1; i++) {
      // Цикл проходит через все ряды кроме первого - т.к. в нем содержатся заголовкки
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n]; // Текущий элемент
      y = rows[i + 1].getElementsByTagName("td")[n]; // Следующий элемент

      //  Проверка по "возрастанию" и "убыванию"
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      // Если флаг отмечен, то делаем замену и отмечаем во втором флаге что была сделана замена
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Делаем пометку, что была сделана на замена
      switchcount++;
    } else {
      // Если не было сделано замен, а текущее положение сортировки "по возрастанию" то развернуть ее и просортировать
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};
