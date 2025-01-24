const express = require('express');
const router = express.Router();


const teaItem = require('./../models/tea');


router.get('/', async (req, res) => {
    try {
        const data2 = await teaItem.find();  // Retrieve all documents from the database using `find()`
        console.log('Data fetched');
        res.status(200).json(data2);  // Send the fetched data with a 200 OK status
    } catch (err) {
        console.error(err);  // Log any error that occurs
        res.status(500).json({ error: "Internal server error" });  // Send a 500 Internal Server Error response
    }
});




router.post('/', async (req, res) => {
    try {
        const data2 = req.body; // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newteaItem = new teaItem(data2);

        // Save the new Person to the database
        const response = await newteaItem.save();
        console.log('Data saved:', response);
        res.status(200).json(response);

    } catch (err) {
        console.error('Error occurred:', err); // Log the actual error
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router
