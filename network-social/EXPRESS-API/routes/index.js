const express = require("express");
const router = express.Router();
const multer = require("multer");

const iploadDestination = "uploads";

//Показываем где хранить файлы
const storage = multer.diskStorage({
  destination: iploadDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

router.get("/register", (req, res) => {
  res.send("register");
});

module.exports = router;
