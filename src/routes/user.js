import express from "express";
// import defaultController from "../controllers/defaultController.js";
// import { authRequired } from "../controllers/auth/authController.js";

import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } from "../controllers/blogs.js";
// import { signUpUser, loginUser, logoutUser } from "../controllers/auth/authController.js";

const Router = express.Router();

Router.get("/blogs", getBlogs)

  .get("/blogs/:id", getBlog)

  .post("/blogs", createBlog)

  .put("/blogs/:id", updateBlog)

  .delete("/blogs/:id", deleteBlog)

export default Router;
