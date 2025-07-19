export const TaskAction=(token)=>{
    return async(dispatch)=>{
        try {
            let res=await fetch("http://localhost:3000/api/task/get",{
                method:"GET",
                headers:{
                    "Authorization": ` Bearer ${token}`

                }
            })
            let data=await res.json()

            dispatch({type:"FETCH_TASK",payload:data})

        } catch (error) {
            console.log(error);
            
        }
    }
}


export const TaskDeleteAction=(token,id)=>{
    return async(dispatch)=>{
        try {
            let res=await fetch(` http://localhost:3000/api/task/delete/${id}`,{
                method:"DELETE",
                headers:{
                    "Authorization": ` Bearer ${token}`

                }
            })
            let data=await res.json()
if (res.ok) {
    dispatch({type:"DELETE",payload:id})
}

        } catch (error) {
            console.log(error);
            
        }
    }
}
export const TaskEditAction = (token, data, id) => {
    return async (dispatch) => {
        try {
            let res = await fetch(`http://localhost:3000/api/task/update/${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            dispatch({ type: "UPDATE", payload: result });
        } catch (error) {
            console.log(error);
        }
    };
};
