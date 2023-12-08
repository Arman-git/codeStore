import { Router } from "express";
import { checkAuth } from "../utills/checkAuth.js";
import { createPost } from "../controllers/posts.js";

const router = new Router();

//Create Post
//http://localhost:3002/api/auth/register
router.post("/", checkAuth, createPost);

export default router;
