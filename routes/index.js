var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'produse me',
    subtitle: 'Ideas<br/>to the real world!',
    description: 'Why only corporations are able to produce real world\'s things but it\'s incredible difficult for people? Most things that we use are very simple to design but manufacturing, inventory and accounting don\'t give us opportunity to spread ideas effectively. Let\'s democratize manufacturing!',
  });
});

module.exports = router;
