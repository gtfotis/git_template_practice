'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Greet',
            message: `Who would you like to greet? <p><a href='./greet/luke'>Luke</a></p><p><a href='./greet/ahsoka'>Ahsoka</a></p><p><a href='./greet/han'>Han</a></p>`,
        },
        partials: {
            partial: 'partial-index',
        }
    })
});

module.exports = router;

// 'use strict';
// const express = require('express');
// const router = express.Router();
// router.get('/:handle?', (request, response) => {
//     response.render('template', {
//         locals: {
//             title: 'Greet',
//             name: request.params.handle,
//         },
//         partials: {
//             partial: 'partial-greet',
//         }
//     })
// });

// module.exports = router;