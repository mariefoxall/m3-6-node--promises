// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
const request = require("request");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: "f73a9022bacd492cb4a8633fcb6f4c69",
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      // console.log(data);
      return data.results[0].geometry;
    })
    .catch((error) => {
      return "error", error.message;
    });
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

getPositionFromAddress("London, England").then((response) =>
  console.log(response)
);

getPositionFromAddress(
  "435 Mclean Drive, Vancouver, BC, Canada"
).then((response) => console.log(response));
