import express from "express";
import {
    createUserDetails,
    getAllUserDetails,
    getUserDetailsById,
    updateUserDetails,
    deleteUserDetails,
    getUserDetailsByQuery
  } from "../controllers/userDetails.controller.js";
// import { authenticate } from "../middlware/dataMiddleware.js";
const router = express.Router();

router.post("/user-details", createUserDetails);
router.get("/user-details", getAllUserDetails);
router.get("/user-details/:id", getUserDetailsById);
router.put("/user-details/:id", updateUserDetails);
router.delete("/user-details/:id", deleteUserDetails);
router.get("/user", getUserDetailsByQuery);


export default router;