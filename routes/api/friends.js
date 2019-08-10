const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
const Friend = require("../../models/Friend");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/newfriend", (req, res) => {

    const newFriend = new Friend({
        id1: req.body.id1,
        friendname: req.body.friendname,
        friendemail: req.body.friendemail,

    });

    console.log(newFriend);
    newFriend
        .save()
        .then(friend => res.json(friend))
        .catch(err => console.log(err));

});


router.delete("/delete/:idv", (req, res) => {
    Friend
        .findById({ _id: req.params.idv })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

});

router.put("/update/:idv", (req, res) => {
    console.log(req.body);
    Friend
        .findOneAndUpdate({ _id: req.params.idv }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

});

router.get("/friend/:userid", (req, res) => {
    console.log(req.params.userid)
    Friend
        .find({ id1: req.params.userid }, "_id friendname")
        .then(dbModel => {
            res.json(dbModel);
            console.log(dbModel)
        })
        .catch(err => res.status(422).json(err));


});




module.exports = router;