import { Router } from "express";
import { checkAuth } from "../utills/checkAuth.js";
import { createPost, getAll, getById } from "../controllers/posts.js";

const router = new Router();

//Create Post
//http://localhost:3002/api/auth/register
router.post("/", checkAuth, createPost);

//Create ALL Posts
//http://localhost:3002/api/auth/register
router.get("/", getAll);

//Get Post by id
//http://localhost:3002/api/auth/register
router.get("/:id", getById);

export default router;
