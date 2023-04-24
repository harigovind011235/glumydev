import {
  getAllUsers,
  createUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  userLogin
} from "../controllers/userController";
import multer from "multer";

// Set up storage for uploaded resumes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads will be stored in the uploads/ directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for the uploaded file
  },
});

// Set up multer middleware
const upload = multer({ storage: storage });

const routes = (app) => {
    app.route("/user").get(getAllUsers).post(upload.single("resume"),createUser).put(updateUserProfile);
    app.route("/user/:id").get(getUserProfile).delete(deleteUserProfile);
    app.route("/user/login").post(userLogin)
  };

export default routes;
