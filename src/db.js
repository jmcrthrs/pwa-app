import Dexie from "dexie";
import "dexie-export-import";

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

export const exportDatabase = async (progressCallback) => {
  return await db.export({ prettyJson: true, progressCallback });
};

export const importDatabase = async (file, progressCallback) => {
  try {
    console.log("Importing " + file.name);
    await db.delete();
    db = await Dexie.import(file, {
      progressCallback,
    });
    console.log("Import complete");
  } catch (error) {
    console.error("" + error);
  }
};

export default db;
