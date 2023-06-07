let { body } = require('express-validator');

exports.validateAddUser = [
    body("fullname")
        .notEmpty()
        .withMessage("Must be at least 2 chars long"),

    body("email")
        .isEmail()
        .withMessage("Must be a valid email")
        .normalizeEmail(),

    body("phone")
        .exists()
        .withMessage("Mobile number is required")
        .trim()
        .isLength({
            min: 10,
            max: 10
        })
        .isNumeric()
        .withMessage("Must be a valid mobile number"),

   

    body("address")
        .notEmpty()
        .withMessage('street_name is required'),

];

exports.validateUpdateUserById = [
    body("userid").exists().isNumeric().withMessage("Must be only Numeric"),
   

    body("fullname")
    .notEmpty()
    .withMessage("Must be at least 2 chars long"),

body("email")
    .isEmail()
    .withMessage("Must be a valid email")
    .normalizeEmail(),

body("phone")
    .exists()
    .withMessage("Mobile number is required")
    .trim()
    .isLength({
        min: 10,
        max: 10
    })
    .isNumeric()
    .withMessage("Must be a valid mobile number"),



body("address")
    .notEmpty()
    .withMessage('street_name is required'),

];

exports.validateGetUserById = [
    body("userid")
    .notEmpty()
    .exists()
    .isNumeric()
    .withMessage("Must be only Numeric"),
];

exports.validateDeleteUserById = [
    body("userid")
    .notEmpty()
    .exists()
    .isNumeric()
    .withMessage("Must be only Numeric"),
];