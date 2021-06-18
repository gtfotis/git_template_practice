'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Luke',
            message: `Hello, Luke!`,
        },
        partials: {
            partial: 'partial-index',
        }
    })
});

module.exports = router;