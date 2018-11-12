const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/AngularProject', (err, client) => {
    if (err) return console.log(err);
    
    let db = client.db('AngularProject');
    closure(db);
    });
    };

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/product', (req, res) => {
    connection((db) => {
        db.collection('product')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Validate User
router.post('/validate', (req, res) => {
    console.log(req.body);
    connection((db) => {
        db.collection('users')
            .find(req.body)
            .toArray()
            .then((response) => {
                console.log(response);
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//New User Registration
router.post('/registration', (req, res) => {
    console.log(req.body);
    connection((db) => {
        db.collection('users')
            .insert(req.body)
            .then((response) => {
                console.log(response);
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;