const express = require("express");
const router = express.Router();
const { login, register, current } = require("../controllers/users.js");
const { auth } = require('../middleware/auth.js')

/* GET users listing. */
// /api/user/login
router.post("/login", login);

// /api/user/register
router.post("/register", register);

// /api/user/current
router.get("/current", auth, current);

module.exports = router;