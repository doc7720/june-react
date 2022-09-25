import Joi from "joi";


const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА]{1,15}$/).required().messages({
        'string.pattern.base': 'Only letters, min 1 character, max 20 characters'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1995).max(new Date().getFullYear()).required(),
});

export {carValidator}