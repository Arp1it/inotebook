const express = require('express');
const router = express.Router()


router.get("/", (req, res)=>{
    obj = {
        a: 'Thanos',
        Number: 420
    }

    res.json(obj)
})

module.exports = router