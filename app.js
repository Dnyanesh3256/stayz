const express = require("express");
const port = 8080;
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

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
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
    res.send("working");
});

app.get("/listings", async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
});

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

app.post("/listings", async (req, res) => {
    let listing = req.body.listing;
    console.log(listing);
    let newListing = await Listing.insertOne(listing);
    newListing.save();
    res.redirect("/listings");
});

app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
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