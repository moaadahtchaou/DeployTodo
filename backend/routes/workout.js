const express = require('express');
const workoutshema=require("../models/workoutschema");
const { getAllworkouts, AddNewWorkout, getspecialworkout, UpdateWorkout, DeleteWorkout } = require('../ReqControlle/ReqControlle');

const route=express.Router()

route.get("/",getAllworkouts)

route.get("/:id",getspecialworkout)

route.post("/",AddNewWorkout)

route.patch("/:id",UpdateWorkout)

route.delete("/:id",DeleteWorkout)

module.exports = route
