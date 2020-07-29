const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Form = require('../../models/Form');

router.post(
  '/',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('eventName', 'Event Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, eventName, eventDesc } = req.body;

    try {
      form = new Form({
        firstName,
        lastName,
        email,
        eventName,
        eventDesc,
      });

      await form.save();
      res.json(form);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
