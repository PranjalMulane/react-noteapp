const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    a = {
        name : "pranjalll",
        role : "developer"
    }
    res.json(a);
})

module.exports = router

