import User from "../../models/user.js";
import errorHandler from "../../utilities/error.js";

export const fetchAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find(
			{},
			{
				_id: 1, //true
				userName: 1,
				firstName: 1,
				lastName: 1,
				email: 1,
				// password: 0, // falsey
			}
		);

		if (allUsers) {
			return res.json(errorHandler(false, "Fetching User(s)", allUsers));
		} else {
			return res.status(403).json(errorHandler(true, "Error Fetching User(s)"));
		}
	} catch (error) {
		return res.status(400).json(errorHandler(true, "Error Fetching User(s)"));
	}
};

export const deleteUser = (req, res) => {
	try {
		User.findByIdAndRemove(
			req.params.id, 
			{ new: true }, 
			(error, deletedUser) => {
				if (deletedUser) {
					return res.json(errorHandler(false, "Deleting User", deletedUser))
				} else {
					return res.json(errorHandler(true, "Error deleting user"))
				}
			})

	} catch (error) {
		return res.json(errorHandler(true, "Error deleting user"))
	}
};

export const updateUser = (req, res) => {
	try {
		User.findOneAndUpdate(
			{ userName: req.params.userName },
			req.body,
			{ new: true }, 
			(error, updatedUser) => {
				if (updatedUser) {
					res.json(errorHandler(false, "Updated User", updatedUser))
				} else {
					return res.json(errorHandler(true, "Error Updating User", {
						error: error.message
					}))
				}
			}
		)
	} 
	catch (error) {
		return res.json(errorHandler(true, "Error updating user"))
	}
};

export const findUserById = (req, res) => {
	try {
		User.findById(req.params.id, (error, foundUser) => {
			if (foundUser) {
				const { userName, firstName, lastName, email, createdAt } = foundUser;
				return res.json(errorHandler(false, "User found", {
					user: {
						userName,
						name: `${firstName} ${lastName}`,
						email,
						member_since: createdAt
					}
				}))
			} else {
				return res.json(errorHandler(true, "Trouble finding user"))
			}
		})
	} 
	catch (error) {
		res.json(errorHandler(true, "Trouble finding user"))
	}
}