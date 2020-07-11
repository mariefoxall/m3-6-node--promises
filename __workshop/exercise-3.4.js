// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getPositionFromAddress } = require("./exercise-3.2.js");
const { getIssPosition } = require("./exercise-3.1.js");
const opencage = require("opencage-api-client");
require("dotenv").config();

const getDistance = (pos1, pos2) => {
  console.log("pos1: " + pos1);
  console.log("pos2: " + pos2);
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  return getPositionFromAddress(address)
    .then((addressPosition) => {
      return getIssPosition().then((issPosition) => {
        return getDistance(issPosition, addressPosition);
      });
    })
    .catch((error) => {
      return "error", error.message;
    });
};

getDistanceFromIss(
  "760 rue Rachel E, Montreal, Quebec, Canada"
).then((result) => console.log(result));
