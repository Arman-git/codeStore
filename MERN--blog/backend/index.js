import express from "express";
import multer from "multer";

import mongoose from "mongoose";

import {
  registerValidation,
  loginValidation,
  postCreateValidation,
} from "./validations.js";

import { handleValidationErrors, CheckAuth } from "./utils/index.js";

import { PostController, UserController } from "./controllers/index.js";

mongoose
  .connect(
    "mongodb+srv://armantulyandiev:12345Arman@cluster0.x092ckl.mongodb.net/mern-blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cd) => {
    cd(null, "upload");
  },
  filename: (_, file, cd) => {
    cd(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());

app.use("/upload", express.static("upload"));

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", CheckAuth, UserController.getMe);

app.post("/upload", CheckAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/upload/${req.file.originalname}`,
  });
});

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post(
  "/posts",
  CheckAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);
app.delete("/posts/:id", CheckAuth, PostController.remove);
app.patch(
  "/posts/:id",
  CheckAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
