'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Han',
            message: `Han.`,
        },
        partials: {
            partial: 'partial-index',
        }
    })
});

module.exports = router;