import { act } from "react"

const initialState={
    task:{
        title:"",
        description:"",
        status: "",
        priority: ""
    }
}

const FormReducer=(state=initialState,action)=>{
    if (action.type=="ADD_TASK") {
        return{
            ...state,
            task:{
                ...state.task,
                title: action.payload.task.title,
        description:action.payload.task.description,
        status: action.payload.task.status,
        priority: action.payload.task.priority
            }
        }
    }
    return state
}

export default FormReducer