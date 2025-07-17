const initData = require("./data.js");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/stayz";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch((err) => {
        console.log(err);
    });

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data initialized!")
}

initDB();
