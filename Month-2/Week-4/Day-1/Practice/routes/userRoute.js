const express = require("express");

const { createuser } = require("../controllers/userController");



const router = express.Router();

router.post("/create", createuser);



module.exports = router


