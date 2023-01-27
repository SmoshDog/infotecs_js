"use strict";

import { customers } from "./customers.js";

const customersTableTbody = document.querySelector("#customers-table tbody");

const clients = customers.map((client) => ({
  firstName: client.name.firstName,
  lastName: client.name.lastName,
  about: client.about,
  eyeColor: client.eyeColor,
}));

const CustomersTable = () => {
  return `
    <div class="table-container">
      <table class="table" id="customers-table">
        <thead>
          <tr>
            <th>Имя (firstName)</th>
            <th>Фамилия (lastName)</th>
            <th>Описание (about)</th>
            <th>Цвет глаз (eyeColor)</th>
          </tr>
        </thead>
        <tbody>
          ${clients
            .map(
              (client) => `
              <tr>
                <td>${client.firstName}</td>
                <td>${client.lastName}</td>
                <td>
                  <div class="table__about-text">${client.about}</div>
                </td>
                <td>${client.eyeColor}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>

      </table>
        <div class="changes-form"> 
          <form class="changes">
            <input class="input" id="firstName" type='text'/>
            <input class="input" id="lastName" type='text'/>
            <input class="input" id="about" type='text'/>
            <input class="input" id="eyeColor" type='text'/>
            <button class='cancel' type='button' >Отменить</button>
            <button class='submit' type='submit' >Сохранить </button>
          </form>
        </div>

      </div>
  `;
};

const App = () => {
  return `${CustomersTable()}`;
};

function render() {
  document.getElementById("app").innerHTML = App();
}
render();
