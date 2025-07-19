const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.object().required(),
        price: Joi.object().required().min(0),
        image: Joi.string().allow("", null)
    }).required()
});