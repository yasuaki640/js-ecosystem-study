let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

router.get('/', controllers.news_api_controller.index);

module.exports = router;