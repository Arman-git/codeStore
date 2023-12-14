import { Router } from "express";
import { checkAuth } from "../utills/checkAuth.js";
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost
} from "../controllers/posts.js";

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

//Get my Posts
//http://localhost:3002/api/auth/register
router.get("/user/me", checkAuth, getMyPosts);

//Remove post
//http://localhost:3002/api/auth/register
router.delete("/:id", checkAuth, removePost);

//Update post
//http://localhost:3002/api/auth/register
router.put("/:id", checkAuth, updatePost);


export default router;
