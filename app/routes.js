const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to '/auth/v9/gov-account-3'
router.post('/auth/v9/gov-account-3', function (req, res) {

    // Make a variable and give it the value from 'do-you-think-you-have-a-trn'
    var doYouThinkYouHaveATRN = req.session.data['do-you-think-you-have-a-trn']
  
    // Check whether the variable matches a condition
    if (doYouThinkYouHaveATRN == "yes"){
      // Send user to auth flow
      res.redirect('/auth/v9/gov-account-3')
    } else {
      // Do nothing
      res.redirect('/find-a-lost-teacher-reference-number/check-if-you-have-a-trn')
    }
  
  })

module.exports = router
