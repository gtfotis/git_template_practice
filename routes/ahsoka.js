'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Ahsoka',
            message: `Good to see you, Ahsoka!`,
        },
        partials: {
            partial: 'partial-index',
        }
    })
});

module.exports = router;