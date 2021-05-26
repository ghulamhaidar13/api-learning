const mongoose = require('mongoose');
const TourModel = require('../models/toursModel');



exports.saveTour = (req, res) => {
    const Tour = new TourModel({
        name: 'Delhi',
        rating: 4.5
    });
   Tour
    .save()
    .then(
       () => {res.status(200).send('Created tour successfully')}
    )
    .catch(
        (error) => {
            console.log(error);
            res.status(200).send('Failed to create tour');
            
        }
    )
}

