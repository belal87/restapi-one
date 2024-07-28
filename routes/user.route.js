const express = require("express");
const {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getOneUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
