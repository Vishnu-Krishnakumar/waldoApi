const {Router} = require("express");
const { body, validationResult } = require("express-validator");
const alphaErr = "must contain letters only";
const lengthErr = "must be at least 1 character";

const validateUser = [
    body("username").trim().escape()
      .isAlpha().withMessage(`Username ${alphaErr}`)
      .isLength({min:1}).withMessage(`Username ${lengthErr}`),

  ];
  

  module.exports = [
    ...validateUser, (req,res,next)=>{
      const errors = validationResult(req);
        if(!errors.isEmpty()){
          return res.status(400).json({
            title: "Validation failed",
            errors: errors.array(),
          });
      }
      next();
    }
  ]
    