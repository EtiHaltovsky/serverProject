//localhost:8000/users/
const express = require('express');
const volunteerController = require('../controllers/volunteerController');
const router = express.Router();



router.route('/').get(async(req, res) => {
   const result = await volunteerController.getAllVolunteers();
   res.json(result);
});


// router.route('/').get((req, res) => {

//     const result =  volunteerControllers.getAllVolunteers();
//     res.json(result);
//         // const str = CircularJSON.stringify(obj);

//  });

router.route('/:id').get(async(req, res) => {
    const result = await volunteerController.getVolunteerById(req.params.id);
    res.json(result);
});

router.route('/').post(async(req, res) => {
    const obj = req.body;
    console.log(obj)
    const result = await volunteerController.addVolunteer(obj);
    console.log(result)
    res.json(result);
});


router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await volunteerController.updateVolunteer(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = volunteerController.deleteVolunteer(req.params.id);
    res.json(result);
})

module.exports = router;
