import { useState } from "react"

const WorkoutForm =(props)=>{
   const [title,setTitle] = useState('')
   const [load,setLoad] = useState('')
   const [reps,setReps] = useState('')
   const [error,setError] = useState(null)
   
   const handleSubmit= async (e)=>{
    e.preventDefault()

    const workout ={title,load ,reps}

    const response = await fetch('/api/workouts',{
        method:"POST",
        body :JSON.stringify(workout),//convert to json from object
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json = await response.json()//convert to js object from json
    if (!response.ok){
        setError(json.error)
    }
    if (response.ok){
        setTitle("")
        setLoad("")
        setReps("")
        setError(null)
        
        console.log("new workou added")
    }
   }
   
    return(

<form className ="create" onSubmit={handleSubmit}>
<h3>add a new workout</h3>

<label>exercise title:</label>
<input type="text" onChange={(e)=>setTitle(e.target.value)  } value ={title}></input>

<label>Load(in KG):</label>
<input type="number" onChange={(e)=>setLoad(e.target.value)  } value ={load}></input>

<label>Reps:</label>
<input type="number" onChange={(e)=>setReps(e.target.value)  } value ={reps}></input>

<button>Add workout</button>
{error && <div className="error">{error}</div>}
</form>
        
    )
    
    }
    export default WorkoutForm