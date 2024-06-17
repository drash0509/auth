const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    bob = {
        a:'thios',
        number:34
    }
    res.json(bob)
})


module.exports = router