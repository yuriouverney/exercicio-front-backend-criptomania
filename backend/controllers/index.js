var express = require('express');
var router = express.Router();

router.use('/calculadora', require('./calculadora.controller'));
router.use('/blog', require('./blog.controller'));

module.exports = router;