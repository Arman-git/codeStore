const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller");
const PostController = require("../controllers/post-controller");
const CommentController = require("../controllers/comment-controller");
const { authenticationToken } = require("../middleware/auth");
const multer = require("multer");

const uploadDestionation = "uploads";

//Показываем где хранить файлы
const storage = multer.diskStorage({
  destination: uploadDestionation,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Роуты пользователей
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current", authenticationToken, UserController.current);
router.get("/users/:id", authenticationToken, UserController.getUserById);
router.put("/users/:id", authenticationToken, UserController.updateUser);

//Роуты постов
router.post("/posts", authenticationToken, PostController.createPost);
router.get("/posts", authenticationToken, PostController.getAllPosts);
router.get("/posts/:id", authenticationToken, PostController.getPostById);
router.delete("/posts/:id", authenticationToken, PostController.deletePost);

//Роуты комментариев
router.post("/comments", authenticationToken, CommentController.createComment);
router.delete(
  "/comments/:id",
  authenticationToken,
  CommentController.deleteComment
);

module.exports = router;
