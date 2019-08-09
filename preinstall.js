const fs = require("fs");
fs.writeFile("./config/keyFile.json", process.env.GOOGLE_CONFIG, (err) => {});