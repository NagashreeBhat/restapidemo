const _ = require('lodash');
const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/data/'));
// middlewares
app.use(express.json());

// start express server
app.listen(4000, () => console.log('Listening on port 4000. Good luck'));

// rest Pizza api endpoints
app.get('/api/listAll', async (req, res) => {
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

    if (req.query.username == 'neu' && req.query.password == 'neupass') {
        return res.send({
            message: 'Margherita, Romana, Valtellina, Calzone',
        });
    }
    else {
        return res.status(401).send({
            message: 'Please enter correct credentials.',
        });
    }
});
app.get('/api/GetImage', async (req, res) => {
    const { error } =  Joi.validate(req.query, {
        imagename: Joi.required(),
        //password: Joi.required(),
    }, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).send({
            message: _.join(_.map(error.details, 'message'), ', '),
        });
    }

    if (req.query.imagename == 'Margherita' ) {
        return res.send({
            message: 'http://192.168.1.10:4000/imgpizza1.png',
        });
    }
    if (req.query.imagename == 'Romana' ) {
        return res.send({
            message: 'http://192.168.1.10:4000/imgpizza2.png',
        });
    }
    if (req.query.imagename == 'Valtellina' ) {
        return res.send({
            message: 'http://192.168.1.10:4000/imgpizza3.png',
        });
    }
    if (req.query.imagename == 'Calzone' ) {
        return res.send({
            message: 'http://192.168.1.10:4000/imgpizza4.png',
        });
    }
    else {
        return res.status(401).send({
            message: 'Please enter correct credentials.',
        });
    }
});

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
app.get('/api/cost', async (req, res) => {
    const { error } =  Joi.validate(req.query, {
        option1: Joi.number().integer().required(),
        option2: Joi.number().integer().required(),
        option3: Joi.number().integer().required(),
        option4: Joi.number().integer().required(),
    }, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).send({
            message: _.join(_.map(error.details, 'message'), ', '),
        });
    }
    
    cost=15;
    if (req.query.option4 == '2' ) {
        cost=17
    }
    if (req.query.option4 == '3' ) {
        cost=19
    }

    if (req.query.option1 == '1' ) {
        cost=cost+1
    }
    if (req.query.option2 == '1' ) {
        cost=cost+2
    }
    if (req.query.option3 == '1.5' ) {
        cost=cost+3
    }
   
    return res.send({
        message: (cost),
    });
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
