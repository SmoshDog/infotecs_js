"use strict";

import { customers } from "./customers.js";

const customersTableTbody = document.querySelector("#customers-table tbody");

customers.forEach((customer) => {
  customersTableTbody.innerHTML += `
    <tr>
      <td>${customer.name.firstName}</td>
      <td>${customer.name.lastName}</td>
      <td>${customer.about}</td>
      <td>${customer.eyeColor}</td>
    </tr>
  `;
});

// https://stackoverflow.com/a/21065846
