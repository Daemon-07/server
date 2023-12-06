const {
    check,
    validationResult
} = require('express-validator');
const {
    sendResponseObj
} = require('../functions/response');

exports.validateLogin = [
    check('password')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({
        min: 6
    })
    .withMessage('Minimum 3 characters required!')
    .bail(),
    check('username')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({
        min: 6
    })
    .withMessage('Minimum 3 characters required!')
    .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            sendResponseObj(422, 'VALIDATION_ERROR', 'Invalid Data', {
                "errors": errors.array()
            }, res);
        } else {
            next();
        }


    },
];