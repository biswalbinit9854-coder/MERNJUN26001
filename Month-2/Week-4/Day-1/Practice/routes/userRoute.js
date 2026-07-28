const express = require("express");

const {
  createUser,
  loginUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/usercontroller");
const {protect}=require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/fetch",protect, getAllUsers);
router.put("/update/:id",protect ,updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;