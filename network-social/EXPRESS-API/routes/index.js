const express = require("express");
const router = express.Router();
const multer = require("multer");
const { UserController } = require("../controllers");
const { authenticationToken } = require("../middleware/auth");

const uploadDestionation = "uploads";

//Показываем где хранить файлы
const storage = multer.diskStorage({
  destination: uploadDestionation,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current", authenticationToken, UserController.current);
router.get("/users/:id", authenticationToken, UserController.getUserById);
router.put("/users/:id", authenticationToken, UserController.updateUser);

module.exports = router;
