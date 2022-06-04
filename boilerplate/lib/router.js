const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/src/:name', (req, res) => {
    let n = req.params.name.replace(".ts", "");
    return res.sendFile(path.join(__dirname, '../build/' + n + '.js'));
});

module.exports = router;