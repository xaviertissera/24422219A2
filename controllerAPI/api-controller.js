var dbcon = require('../crowdfunding_db');

var connection = dbcon.getconnection();
connection.connect();

var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM fundraiser', (err, rows, fields) => {
        if (err) {
            console.error("Error while performing Query:", {
                error: err
            });
            res.status(500).send("Error while performing query.");
        } else {
            res.send(rows);
        }
    });
});

module.exports = router;

