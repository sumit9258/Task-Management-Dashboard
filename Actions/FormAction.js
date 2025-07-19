export const FormAction=(addtaskData)=>{
    return async (dispatch)=>{
        const token=localStorage.getItem("token")
        const res=await fetch("http://localhost:3000/api/task/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": ` Bearer ${token}`

            },body:JSON.stringify(addtaskData)
        })
        const data=await res.json()
      
        console.log(data);
        dispatch({type:"ADD_TASK",payload:data})
        
    }
}