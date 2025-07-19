import { Route, Routes } from "react-router-dom"
import Home from "./Componants/home"
import Login from "./Componants/Login"
import Register from "./Componants/Register"
import Profile from "./Componants/Profile"
import Task from "./Componants/Task"
import TaskEdit from "./Componants/TaskEdit"


''
function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>
  <Route path="/task" element={<Task/>}></Route>
  <Route path="/task/task/update/:id" element={<TaskEdit/>}></Route>
</Routes>
    </>
  )
}

export default App