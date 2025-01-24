const express = require('express');
const router = express.Router();

const menuItem = require('./../models/menuItem')

 
router.get('/', async (req, res) => {
    try {
        const data1 = await menuItem.find();  // Retrieve all documents from the database using `find()`
        console.log('Data fetched');
        res.status(200).json(data1);  // Send the fetched data with a 200 OK status
    } catch (err) {
        console.error(err);  // Log any error that occurs
        res.status(500).json({ error: "Internal server error" });  // Send a 500 Internal Server Error response
    }
});



router.post('/', async (req, res) => {
    try {
        const data1 = req.body; // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newItem = new menuItem(data1);

        // Save the new Person to the database
        const response = await newItem.save();
        console.log('Data saved:', response);
        res.status(200).json(response);

    } catch (err) {
        console.error('Error occurred:', err); // Log the actual error
        res.status(500).json({ error: "Internal server error" });
    }
});




router.get('/:tastetype', async (req, res) => {
    try {
        const tastetype = req.params.tastetype; // Use the correct case for `worktype`
        if (tastetype === 'sweet' || tastetype === 'sour' || tastetype === 'spicy') {
            const response = await menuItem.find({ taste: tastetype }); // Use a different variable name
            console.log('Response fetched');
            res.status(200).json(response); // Return the response properly
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' }); // Adjust error message
    }
});

//comment
module.exports = router

