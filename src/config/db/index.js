const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/nodejs_dev");
    console.log("Connect OK!");
  } catch (e) {
    console.log("Connect False!", e);
  }
}

module.exports = { connect };
