
const express = require("express");
const accountModel = require("../models/Account");

const router = express.Router();

router.get("/", async (req, res) => {
    const accounts = await accountModel.find({});

    try {
        // console.log(accounts);
        // res.send(accounts);
        res.render("account", { Account : accounts });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/create", async (req, res) => {
    res.render("account-create" );
});


router.post("/", async (req, res) => {
    const account = new accountModel(req.body);

    try {
        console.log(req.body);
        await  account.save();
        res.send(account);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;