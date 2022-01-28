import express from "express";
import defaultController from "../controllers/defaultController.js";
import { authRequired } from "../controllers/auth/authController.js";

import { fetchAllUsers, deleteUser, updateUser, findUserById} from "../controllers/user/user.controller.js";
import { signUpUser, loginUser, logoutUser} from "../controllers/auth/authController.js";

const Router = express.Router();

/**
 * Home Route
 */
Router.get("/", defaultController)

	/**
	 * Create/Signup User
	 */
	.post("/signup", signUpUser)

	/**
	 * Get all user(s)
	 */
  .get("/users", fetchAllUsers)
  
  /**
	 * Log In user(s)
	 */
  .post("/login", loginUser)

  /**
	 * Log Out user(s)
	 */

  .get("/logout", logoutUser)

    /**
	 * Delete user(s)
	 */
  .delete("/delete/:id", deleteUser)

  /**
  * Update user(s)
  */

  .put("/update/:userName", updateUser)
  
  /**
  * Find user(s)
  */

  .get("/user/:id", findUserById)
  

export default Router;
