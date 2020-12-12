const router = require('express').Router();	
const apiRoutes = require('./api/index');	
const authRoutes = require('./authRoutes');	
// /api/users	
router.use('/user', apiRoutes);	
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  res.send('This is from Routes index.js')
});


module.exports = router;
