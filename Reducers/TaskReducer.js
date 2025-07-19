import { act } from "react"

const initialState={
    task:[]
}


const TaskReducer=(state=initialState,action)=>{
    if (action.type=="FETCH_TASK") {
        return {
            ...state,
            task:action.payload
            
        }
        }
        if (action.type=="DELETE") {
            return{
                ...state,
                task:state.task.filter((ele)=>ele.id !== action.payload)
            }
        }
           if (action.type=="UPDATE") {
            return{
                ...state,
                task:state.task.map(ele=>ele.id==action.payload.id ? action.payload:task)
            }
          }
        return state
}

export default TaskReducer





