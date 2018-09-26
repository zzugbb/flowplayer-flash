var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '参数测试' });
});

router.get('/api', function(req, res, next) {
  res.render('api', { title: 'api 测试' });
});

router.get('/videojs-test', function(req, res, next) {
  res.render('videoJs', { title: '视频流媒体测试' });
});

module.exports = router;
