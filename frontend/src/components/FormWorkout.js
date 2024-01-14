import { useState } from 'react'
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"
const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyfields, setemptyfields] = useState([]);
  const { dispatch } = useWorkoutsContext()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}
    
    const response = await fetch('https://deploy-todo-api.vercel.app/api/workout', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const jsondata = await response.json()

    if (!response.ok) {
      setError(jsondata.err)
      setemptyfields(jsondata.emptyField)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      setemptyfields([])
      dispatch({type: 'CREATE_WORKOUT', payload: jsondata})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyfields.includes("title") ? "err" :""}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        className={emptyfields.includes("load") ? "err" :""}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
        className={emptyfields.includes("reps") ? "err" :""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
