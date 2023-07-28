const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const eduSchema =new mongoose.Schema({
    school:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    study:{
        type:String,
        default:"no photo"
    },
    desc:{
        type:String,
        default:"no photo"
    },
    skill:{
        type:ObjectId,
        ref:"User"
    },
    activities:{
        type:ObjectId,
        ref:"User"
    }

})

mongoose.model("Edu",eduSchema)