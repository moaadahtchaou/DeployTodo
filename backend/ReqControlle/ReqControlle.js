const workoutsDb=require("../models/workoutschema")

//Get All Workouts
const getAllworkouts=async (req,res)=>{
    const workouts=await workoutsDb.find({})
    res.status(200).json(workouts)
}

//Get A single Workout
const getspecialworkout = async (req,res)=>{
    const {id} =req.params
    try{
        const workout=await workoutsDb.findById(id)
    }
    catch{
       return res.status(404).json({msg: "Spec workout exist"})
    }

    res.status(200).json(workout)
}

//Add Workout
const AddNewWorkout= async (req,res)=>{
    const {title,reps,load} =req.body
    let emptyField=[]
    if(!title){
        emptyField.push("title")
    }
    if(!reps){
        emptyField.push("reps")
    }
    if(!load){
        emptyField.push("load")
    }
    if (emptyField.length>0){
        return res.status(404).json({err:"err Please fill in all the fields",emptyField})
    }

    try{
        const workout= await workoutsDb.create({title,reps,load})
        res.status(200).json(workout)
    }

    catch (err){res.status(404).json({mssg:err})}
}

//Update A workout
const UpdateWorkout = async (req,res)=>{
    // const {title,reps,load} =req.body
    const {id} =req.params
    try{
        const workout= await workoutsDb.findOneAndUpdate({_id:id},{
            ...req.body
        })
        res.status(200).json(workout)
    }

    catch (err){res.status(404).json({mssg:err})}
}

const DeleteWorkout=async (req,res)=>{
    // const {title,reps,load} =req.body
    const {id} =req.params
    try{
        const workout= await workoutsDb.findByIdAndDelete(id)
        res.status(200).json(workout)
    }

    catch (err){res.status(404).json({mssg:err})}
}



module.exports ={
    getAllworkouts,
    getspecialworkout,
    AddNewWorkout,
    UpdateWorkout,
    DeleteWorkout
}