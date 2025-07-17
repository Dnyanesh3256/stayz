const express = require("express");
const port = 8080;
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

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

app.get("/", (req, res) => {
    res.send("working");
});

app.get("/testListing", async (req, res) => {
    let newListing = new Listing({
        title: "Test Listing",
        description: "its a test listing",
        image: "www.google.com",
        price: 2000,
        location: "Pune, Maharashtra",
        country: "India"
    });

    await newListing.save();
    res.send("listing saved!");
});

app.listen(port, () => {
    console.log(`listeninnng on port ${port}`);
});