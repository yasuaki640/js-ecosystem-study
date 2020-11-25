let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

router.get('/newsapi/get-top-lines', controllers.news_api_controller.getTopLines);

module.exports = router;