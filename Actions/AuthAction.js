export const LoginAction=(userdata)=>{
    return async (dispatch)=>{
        let res=await fetch("http://localhost:3000/api/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },body:JSON.stringify(userdata)
        })
        let data=await res.json()
  let token=localStorage.getItem("token")
        if (!token) {
            localStorage.setItem("token",data.token)
        }
        dispatch({type:"LOGIN",payload:data})

        return data;

    }
}

export const RegisterAction=(Registerdata)=>{
    return async (dispatch)=>{
        let res=await fetch("http://localhost:3000/api/user/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },body:JSON.stringify(Registerdata)
        })
        let data=await res.json()
        dispatch({type:"REGISTER",payload:data})
return data 
    }
}


export const ProfileAction=(token)=>{
    return async (dispatch)=>{
        let res=await fetch("http://localhost:3000/api/user/profile",{
            method:"GET",
            headers:{
               "Authorization": ` Bearer ${token}`

            }
        })
        let data=await res.json()
       
        dispatch({type:"GET_PROFILE",payload:data})

    }
}