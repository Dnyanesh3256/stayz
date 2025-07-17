const express = require("express");
const port = 8080;
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("working");
});

app.get("/listings", async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
});

app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
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