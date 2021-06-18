'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Greeting Simulator',
            message: 'Welcome to the greeting simulator! <br> This app will let you practice greeting up to THREE WHOLE PEOPLE',
        },
        partials: {
            partial: 'partial-index',
        }
    })
});

module.exports = router;