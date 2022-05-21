const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  getUser,
  getAccountNumber,
  getIdentityNumber,
  deleteUser,
} = require("../controllers/userController");
const { userValidation } = require("../middlewares/userValidation");

router.post("/", userValidation(false), createUser);
router.get("/", getUsers);
router.get("/:accountNumber", getAccountNumber);
router.get("/:identityNumber", getIdentityNumber);
router.get("/:id", getUser);
router.put("/:id", userValidation(true), updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
