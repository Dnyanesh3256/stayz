const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        filename: String,
        url: String,
        // default: "https://thumbs.dreamstime.com/b/luxury-villa-project-under-construction-59226098.jpg",
        // set: (v) =>
        //     v === ""
        //     ? "https://thumbs.dreamstime.com/b/luxury-villa-project-under-construction-59226098.jpg" 
        //     : v,     
    },

    price: {
        type: Number,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;