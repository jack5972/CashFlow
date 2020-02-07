const mongoose = require('mongoose')

const PackageSchema = new mongoose.Schema({
    id : {
        type : Number
    },
    price : {
        type : Number
    },
    description : {
        type : String
    },
    catagory : {
        type : String
    },
    month : {
        type : String
    }
})

mongoose.model('Package',PackageSchema)