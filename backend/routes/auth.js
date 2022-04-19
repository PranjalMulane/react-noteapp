const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/',[
    //validations
    body('name','Enter valid name').isLength({min: 3}),
    body('email','Enter valid Email').isEmail(),
    body('password','Password must be of at least 8 characters').isLength({min : 8}),

],(req,res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   
    // console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);

})

module.exports = router

