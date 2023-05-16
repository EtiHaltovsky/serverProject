//localhost:8000/users/
const express = require('express');
const newRequestsControllers = require('../controllers/newRequestsController');
const router = express.Router();

router.route('/').get(async(req, res) => {
   const result = await newRequestsControllers.getAllnewRequests();
   res.json(result);
});

router.route('/:id').get(async(req, res) => {
    const result = await newRequestsControllers.getNewRequestsById(req.params.id);
    res.json(result);
});

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await newRequestsControllers.addNewRequests(obj);
    console.log(result)
    res.json(result);
});

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await newRequestsControllers.updateNewRequests(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = newRequestsControllers.deleteNewRequests(req.params.id);
    res.json(result);
})

module.exports = router;