const express = require("express");
const router = express.Router();
const ravkavService = require("./ravkavService");


router.get("/getRavkavList", async (req, res) => {
    // try {
    //     let result = await ravkavService.GetRavkavList(req.params.ravkavId);
    //     res.json(result);
    // } catch (error) {
    //     res.status(404).send(error);
    // }
});

router.route('/').get(async (req, res) => {
    try {
        let result = await ravkavService.GetRavkavList(req.params.ravkavId);
        res.json(result);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
