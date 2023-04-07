import {
  getAllUsers,
  createUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  userLogin
} from "../controllers/userController";

const routes = (app) => {
    app.route("/user").get(getAllUsers).post(createUser).put(updateUserProfile);
    app.route("/user/:id").get(getUserProfile).delete(deleteUserProfile);
    app.route("/user/login").post(userLogin)
  };

export default routes;
