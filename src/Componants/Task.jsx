import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskAction, TaskDeleteAction } from "../../Actions/TaskAction";
import { useNavigate } from "react-router-dom";

function Task() {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.task);
  console.log("taskkk", task);
  const navigate = useNavigate();

  const FetchTask = async () => {
    try {
      let res = await fetch("http://localhost:3000/api/task/get");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const TaskDelete = async (id) => {
    let token = localStorage.getItem("token");
    await dispatch(TaskDeleteAction(token, id));
    dispatch(TaskAction(token));
  };

  const UpdateTask = (id) => {
    navigate(`task/update/${id}`);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(TaskAction(token));
    FetchTask();
  }, [dispatch]);

  // Filter tasks by priority
  const highPriority = task?.filter((ele) => ele.priority === "High");
  const mediumPriority = task?.filter((ele) => ele.priority === "Medium");
  const lowPriority = task?.filter((ele) => ele.priority === "Low");

  const renderTasks = (tasks, priority) => (
    <>
      {tasks.map((ele) => (
        <div
          key={ele._id}
          className={`bg-white rounded-xl shadow-md p-6 mb-4 transform transition-all duration-300 hover:shadow-lg animate-slide-up ${
            priority === "High"
              ? "border-l-4 border-red-500"
              : priority === "Medium"
              ? "border-l-4 border-orange-500"
              : "border-l-4 border-green-500"
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-900">{ele.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{ele.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  ele.status === "To Do"
                    ? "bg-blue-100 text-blue-700"
                    : ele.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {ele.status}
              </span>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  ele.priority === "High"
                    ? "bg-red-100 text-red-700"
                    : ele.priority === "Medium"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {ele.priority}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => UpdateTask(ele._id)}
                className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => TaskDelete(ele._id)}
                className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-600 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8 animate-slide-down">
          Task Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
              <span className="mr-2">🔥</span> High Priority
            </h2>
            {highPriority?.length ? renderTasks(highPriority, "High") : (
              <p className="text-gray-400 text-sm">No high priority tasks</p>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
              <span className="mr-2">⚖️</span> Medium Priority
            </h2>
            {mediumPriority?.length ? renderTasks(mediumPriority, "Medium") : (
              <p className="text-gray-400 text-sm">No medium priority tasks</p>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <span className="mr-2">🌱</span> Low Priority
            </h2>
            {lowPriority?.length ? renderTasks(lowPriority, "Low") : (
              <p className="text-gray-400 text-sm">No low priority tasks</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;