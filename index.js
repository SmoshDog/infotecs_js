"use strict";

import { customers } from "./customers.js";

const customersTableTbody = document.querySelector("#customers-table tbody");

const clients = customers.map((client) => ({
  firstName: client.name.firstName,
  lastName: client.name.lastName,
  about: client.about,
  eyeColor: client.eyeColor,
}));
// console.log(clients);

const tr = document.createElement("tr");
const td = document.createElement("td");
const keysOfClientObject = Object.keys(clients[0]);

// console.log(keysOfClientObject);

for (let i = 0; i < clients.length; i++) {
  const trCloned = tr.cloneNode(false);
  for (let j = 0; j < keysOfClientObject.length; j++) {
    const tdCloned = td.cloneNode(false);
    const cellValue = clients[i][keysOfClientObject[j]];
    // console.log(clients[i]);
    tdCloned.appendChild(document.createTextNode(cellValue || ""));
    trCloned.appendChild(tdCloned);
  }

  customersTableTbody.appendChild(trCloned);
}

// https://stackoverflow.com/a/21065846
