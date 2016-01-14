var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next){
  res.render('new')
})

router.post('/', function(req, res, next){
  res.redirect('/')
})

router.get('/:id', function(req, res, next){
  res.render('view', {number:+req.params.id})
})

router.get('/:id/edit', function(req, res, next){
  res.render('edit', {number: req.params.id});
})

router.post('/:id/edit', function(req, res, next){
  res.redirect('/' + req.params.id)
})

router.post('/:id/delete', function(req, res, next){
  res.redirect('/')
})

module.exports = router;
