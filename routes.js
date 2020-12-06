const { response } = require('express');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('./models/SignUpModels');

router.post('/signup',(request,reponse) =>{
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        
    })
})


module.exports = router;