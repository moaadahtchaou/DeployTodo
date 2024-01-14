const mongoose = require('mongoose');

const Schema=mongoose.Schema

const workoutschema= new Schema({
    title:{
        type:String,
        require:true
    },
    reps: {
        type: Number,
        required: true
      },
    load: {
        type: Number,
        required: true
      }
    }, { timestamps: true })

module.exports = mongoose.model('Workout', workoutschema)