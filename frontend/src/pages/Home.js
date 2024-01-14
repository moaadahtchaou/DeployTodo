import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDeatils"
import WorkoutForm from "../components/FormWorkout";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
const Home = () =>{

    const { workouts, dispatch } = useWorkoutsContext()
    useEffect(()=>{

        const handlefetch = async () => {
            const GetData= await fetch("https://deploy-todo-api.vercel.app/api/workout")
            const jsondata=await GetData.json()
            dispatch({type: 'SET_WORKOUTS', payload: jsondata})
           
        }
        handlefetch()

        console.log("###")

        

    },[dispatch])


    return (
        <div className="home">

            <div className="workouts">
        {workouts && workouts.map((workout)=>(
                <WorkoutDetails workout={workout} key={workout._id} />
            ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home;
