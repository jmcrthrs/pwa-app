/*https://stackoverflow.com/a/68135586*/
const cracoServiceWorkerConfig = require("./cracoServiceWorkerConfig");

module.exports = {
    plugins: [{ plugin: cracoServiceWorkerConfig }],
};