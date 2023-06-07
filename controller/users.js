const Users = require("../model/users");
// const AppError = require("../utils/appError");
const { validationResult } = require("express-validator");

exports.addUsers = async (req, res,next) =>{

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "validation failed,entered data is incorrect",
        errors: errors.array(),
      });
  }

  let fullname = req.body.fullname;
  let email = req.body.email;
  let phone = req.body.phone;
  let address = req.body.address;

  try {
    let result = await Users.addUser(fullname,email,phone , address);
    if (!result.affectedRows) {
        return res.status(400).json({ status: 400, error: null, response: result,message:"user not added" });
      }
      return res
      .status(200)
      .json({ status: 200, message: "user added successfully" });

    
  } catch (error) {
    next(error);
  }
}


exports.viewAllUser = async (req, res, next) => {
    try {
      let result = await Users.fetchAll();
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
        return res
          .status(200)
          .json({ status: 200, error: null, response: result });
      }
    } catch (e) {
      next(e);
    }
  };

  exports.getUserById = async (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "validation failed,entered data is incorrect",
        errors: errors.array(),
      });
    }
  
    let userid = req.body.userid;
  
    try {
      let result = await Users.getUserById(userid);
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
  
        return res.status(200).json({
          status: 200,
          response: result,
        });
      }
    } catch (e) {
      next(e);
    }
  };


  exports.updateUserById = async (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "validation failed,entered data is incorrect",
        errors: errors.array(),
      });
    }
  
    let userid = req.body.userid;
    let fullname = req.body.fullname;
    let phone = req.body.phone;
    let email = req.body.email;
    let address = req.body.address;
  
    try {
      let result = await Users.update(userid,fullname, email,phone ,address);
      {
        if (!result.affectedRows) {
            return res.status(400).json({ status: 400, error: null, response: result,message:"Not Updated" });
        }
  
        return res.status(200).json({
          status: 200,
          message: "user updated successfully",
        });
      }
    } catch (e) {
      next(e);
    }
  };


  exports.deleteUserById = async (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "validation failed,entered data is incorrect",
        errors: errors.array(),
      });
    }
  
    let userid = req.body.userid;
  
    try {
      let result = await Users.delete(userid);
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
  
        return res.status(200).json({
          status: 200,
          response: result,
        });
      }
    } catch (e) {
      next(e);
    }
  };