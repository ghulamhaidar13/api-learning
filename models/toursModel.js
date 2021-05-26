const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: String,
    rating: String
});

const Tour = mongoose.model('Tour', tourSchema, 'testCollection');

module.exports = Tour;