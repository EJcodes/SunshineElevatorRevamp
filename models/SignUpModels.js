const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    businessName:{
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date.now
    }

})



module.exports = mongoose.model('mytable', signUpTemplate)