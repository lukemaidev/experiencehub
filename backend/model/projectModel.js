const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    projectId:{
        type:String,
    },
    projectName:{
        type:String,
        default:"New Project"
    },
    projectDescription:{
        type:String,
        default:"New Project Description"
    },
    projectCreatorId:{
        type:String,
        require:true
    },
    timeCreated:{
        type:Date,
        default:Date.now()
    },
    timeDelivered:{
        type:Date
    },
    projectDelivererIds:{
        type:Array,
        default:[]
    }
}, {collection: "projects"})

module.exports = mongoose.model("projects", ProjectSchema)