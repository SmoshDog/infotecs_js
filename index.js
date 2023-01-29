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
  document.querySelector("#fn-" + index).textContent = fnForm;
  document.querySelector("#ln-" + index).textContent = lnForm;
  document.querySelector("#a-" + index).textContent = aboutForm;
  document.querySelector("#ec-" + index).textContent = eyeColorForm;
};
