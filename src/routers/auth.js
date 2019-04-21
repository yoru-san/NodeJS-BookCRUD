const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login', passport.authenticate('local', {}), (req, res) => {
  res.status(200).send("Authenticated.");
});

router.get('/logout', (req, res, next) => {
  if (req.user) return next();
  return res.status(401).send('You must be logged in to log out.').end();
} ,(req, res) => {
  req.logout();
  res.status(200).send('Logged out.');
});

module.exports = router;