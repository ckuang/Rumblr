/////////////////////////
// Routes for getting and creating (aka posting) information on our home page
/////////////////////////

const router = require('express').Router();

//Response for the home page
const home = (req, res) => {
  res.send('Hey again from the home page');
}

//Configure router for get and post calls
router.route('/')
  .get(home)

module.exports = router;
