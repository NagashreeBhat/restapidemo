const _ = require('lodash');
const Joi = require('joi');
const express = require('express');
const app = express();

// middlewares
app.use(express.json());

// start express server
app.listen(4000, () => console.log('Listening on port 4000. Good luck!'));

// rest api endpoints
app.get('/api/login', async (req, res) => {
    const { error } =  Joi.validate(req.query, {
        username: Joi.required(),
        password: Joi.required(),
    }, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).send({
            message: _.join(_.map(error.details, 'message'), ', '),
        });
    }

    if (req.query.username == 'mamoun' && req.query.password == 'mamoun') {
        return res.send({
            message: 'Your credentials are correct.',
        });
    }
    else {
        return res.status(401).send({
            message: 'Please enter correct credentials.',
        });
    }
});

app.post('/api/login', async (req, res) => {
    const { error } =  Joi.validate(req.body, {
        username: Joi.required(),
        password: Joi.required(),
    }, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).send({
            message: _.join(_.map(error.details, 'message'), ', '),
        });
    }

    if (req.body.username == 'mamoun' && req.body.password == 'mamoun') {
        return res.send({
            message: 'Your credentials are correct.',
        });
    }
    else {
        return res.status(401).send({
            message: 'Please enter correct credentials.',
        });
    }
});

app.get('/api/addition', async (req, res) => {
    const { error } =  Joi.validate(req.query, {
        first_number: Joi.number().integer().required(),
        second_number: Joi.number().integer().required(),
    }, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).send({
            message: _.join(_.map(error.details, 'message'), ', '),
        });
    }

    return res.send({
        message: (parseInt(req.query.first_number) + parseInt(req.query.second_number)),
    });
});

app.post('/api/addition', async (req, res) => {
    const { error } =  Joi.validate(req.body, {
        first_number: Joi.number().integer().required(),
        second_number: Joi.number().integer().required(),
    }, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).send({
            message: _.join(_.map(error.details, 'message'), ', '),
        });
    }

    return res.send({
        message: (parseInt(req.body.first_number) + parseInt(req.body.second_number)),
    });
});
