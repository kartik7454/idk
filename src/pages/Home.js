import { useEffect,useState ,useReducer} from "react"

//components 
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home=()=>{

const[Workouts,setWorkouts]= useState(null)
const [refresh, setRefresh] = useReducer(  x => x + 1, 0);

const handelrefresh=( ) => {
    setRefresh()
}

useEffect( ()=>{
const fetchWorkouts  = async ()=>{
const response = await fetch ('/api/workouts/')
const json = await response.json()

if(response.ok){
setWorkouts(json)
}
}

fetchWorkouts()
},[refresh])


    return(
        <div className="home">
        <div className ="workouts">
            {Workouts && Workouts.map ((workout)=>{
                return(<WorkoutDetails 
                    key ={workout._id}
                    workout={workout}
                />)
                    

            })}
        </div>
        <WorkoutForm 
        handelrefresh={handelrefresh}
        />
         </div>
    )
}

export default Home