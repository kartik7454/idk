const WorkoutDetails =({workout,handelrefresh})=>{
const handelClick= async()=>{
    const response = await fetch ('/api/workouts/' + workout._id,{
        method:'DELETE'
    })
    
    if (response.ok){
        handelrefresh()
    }
}
    

return(
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load(kg):</strong>{workout.load}</p>
        <p><strong>reps:</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handelClick}>delete</span>
    </div>
)

}
export default WorkoutDetails