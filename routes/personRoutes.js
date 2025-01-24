const express = require('express');
const router = express.Router();



const person = require('./../models/person')


router.post('/', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newPerson = new person(data);

        // Save the new Person to the database
        const savedPerson = await newPerson.save();
        console.log('Data saved:', savedPerson);
        res.status(200).json(savedPerson);


    } catch (err) {
        console.error('Error occurred:', err); // Log the actual error
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await person.find();  // Retrieve all documents from the database using `find()`
        console.log('Data fetched');
        res.status(200).json(data);  // Send the fetched data with a 200 OK status
    } catch (err) {
        console.error(err);  // Log any error that occurs
        res.status(500).json({ error: "Internal server error" });  // Send a 500 Internal Server Error response
    }
});



router.get('/:worktype', async (req, res) => {
    try {
        const workType = req.params.worktype; // Use the correct case for `worktype`
        if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
            const response = await person.find({ work: workType }); // Use a different variable name
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



router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await person.findByIdAndUpdate(personId, updatePersonData, {
            new: true, //return the updated doucument
            runValidators: true, //run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'person not found' })
        }
        console.log('data updated')
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        const response = await person.findByIdAndDelete(personId)

        if (!response) {
            return res.status(404).json({ error: 'person not found' })

        }
        console.log('data deleted')
        res.status(200).json({message: 'person deleted successfully'})
    }
        
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server error' });

        }
    })

module.exports = router