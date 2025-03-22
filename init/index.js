const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust2";
async function main(params) {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67dd0fddf9eb5228b2757d94",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
