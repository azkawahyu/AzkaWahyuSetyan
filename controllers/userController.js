const User = require("../models/user");
const catchError = require("../utils/catchHandler");

module.exports = {
  createUser: async (req, res) => {
    const { body } = req;
    try {
      const user = await User.create(body);
      res.status(200).json(user);
    } catch (error) {
      catchError(res, error);
    }
  },
  getUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      catchError(res, error);
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findOne({
        _id: req.params.id,
      });
      if (!user) {
        return res.status(404).json({
          status: "Not Found",
          message: "User Not Found",
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve user",
        result: user,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getAccountNumber: async (req, res) => {
    try {
      const user = await User.findOne({
        accountNumber: req.params.accountNumber,
      });
      if (!user) {
        return res.status(404).json({
          status: "Not Found",
          message: "User Not Found",
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve user",
        result: user,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getIdentityNumber: async (req, res) => {
    try {
      const user = await User.findOne({
        identityNumber: req.params.identityNumber,
      });
      if (!user) {
        return res.status(404).json({
          status: "Not Found",
          message: "User Not Found",
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve user",
        result: user,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!user) {
        return res.status(404).json({
          status: "Not Found",
          message: "User Not Found",
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly update user",
        result: user,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.id,
      });
      if (!user) {
        return res.status(404).json({
          status: "Not Found",
          message: "User Not Found",
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly delete user",
        result: user,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
};
