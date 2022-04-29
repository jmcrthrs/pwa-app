export const getData = () => {
  return fetch("https://random-data-api.com/api/address/random_address").then(
    (response) => response.json()
  );
};
export const getData2 = () => {
  return fetch(
    "https://random-data-api.com/api/appliance/random_appliance"
  ).then((response) => response.json());
};
