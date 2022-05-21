const Joi = require("joi");

module.exports = {
  userValidation: (isUpdate) => {
    return (req, res, next) => {
      let schema;
      if (isUpdate) {
        schema = Joi.object({
          Id: Joi.number(),
          userName: Joi.string(),
          accountNumber: Joi.number(),
          emailAddress: Joi.string(),
          identityNumber: Joi.number(),
        });
      } else {
        schema = Joi.object({
          Id: Joi.number().required(),
          userName: Joi.string().required(),
          accountNumber: Joi.number().required(),
          emailAddress: Joi.string().required(),
          identityNumber: Joi.number().required(),
        });
      }

      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }
      next();
    };
  },
};
