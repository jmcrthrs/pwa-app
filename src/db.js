import Dexie from "dexie";

var db = new Dexie("random_address");
db.version(1).stores({
  addresses: "url,data",
});
db.open()
  .catch(Dexie.MissingAPIError, function (e) {
    console.log("Couldn't find indexedDB API");
  })
  .catch(function (e) {
    console.error(e);
  });

export default db;
