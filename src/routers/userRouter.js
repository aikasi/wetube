import express from "express";
import {
  getChangePassword,
  getEditProfile,
  postChangePassword,
  postEditProfile,
  userDetail,
  users,
} from "../controllers/userControllers";
import { onlyPrivate, uploadAvatar } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editprofile, onlyPrivate, getEditProfile);
userRouter.post(routes.editprofile, onlyPrivate, uploadAvatar, postEditProfile);

// userRouter.get(routes.changepassword, onlyPrivate, getChangePassword);
userRouter.get(routes.changepassword, onlyPrivate, getChangePassword);
// userRouter.post(routes.changepassword, onlyPrivate, postChangePassword);
userRouter.post(routes.changepassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
// M data
// V how does the data look
// C function that looks for the data
