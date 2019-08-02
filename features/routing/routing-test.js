const express = require('express');
const router = express.Router();

router.get('/',
    function testing_route(req, res) {
        console.log(`testing route`);
        res.write(`testing route`);        
        res.end();
    });



module.exports = router;