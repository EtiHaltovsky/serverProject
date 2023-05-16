//localhost:8000/users/
const express = require('express');
const recipientControllers = require('../controllers/recipientController');
const router = express.Router();

router.route('/').get(async(req, res) => {
   const result = await recipientControllers.getAllrecipients();
   res.json(result);
});

router.route('/:id').get(async(req, res) => {
    const result = await recipientControllers.getRecipientById(req.params.id);
    res.json(result);
});

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await recipientControllers.addRecipient(obj);
    console.log(result)
    res.json(result);
});

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await recipientControllers.updateRecipient(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = recipientControllers.deleteRecipient(req.params.id);
    res.json(result);
})

module.exports = router;