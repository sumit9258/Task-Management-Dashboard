import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskEditAction } from "../../Actions/TaskAction";
import { useParams } from "react-router-dom";

function TaskEdit() {
  const [update, setUpdate] = useState({
    title: "",
    description: "",
    status: "To Do",
    priority: "Low",
  });
  const [errors, setErrors] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("idddddd", id);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { title: "", description: "" };

    if (!update.title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    }

    if (!update.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    const data = {
      title: update.title,
      description: update.description,
      status: update.status,
      priority: update.priority,
    };

    let token = localStorage.getItem("token");
    try {
      await dispatch(TaskEditAction(token, data, id));
      setUpdate({ title: "", description: "", status: "To Do", priority: "Low" });
    } catch (error) {
      console.log(error);
      setErrors((prev) => ({ ...prev, description: "Update failed. Please try again." }));
    } finally {
      setIsLoading(false);
    }
  };

  // Color classes for status and priority
  const statusColors = {
    "To Do": "bg-blue-100 text-blue-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Done: "bg-green-100 text-green-700",
  };

  const priorityColors = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-orange-100 text-orange-700",
    High: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md transform transition-all duration-500 hover:shadow-2xl animate-slide-down">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Edit Task
        </h2>
        <form onSubmit={HandleSubmit} className="space-y-5">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              value={update.title}
              onChange={HandleChange}
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.title ? "border-red-400" : "border-gray-200"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300`}
              placeholder="Enter task title"
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-500 animate-slide-in">{errors.title}</p>
            )}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={update.description}
              onChange={HandleChange}
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.description ? "border-red-400" : "border-gray-200"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300 resize-none`}
              placeholder="Enter task description"
              rows="4"
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500 animate-slide-in">{errors.description}</p>
            )}
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <div className="relative">
              <select
                name="status"
                value={update.status}
                onChange={HandleChange}
                className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none transition-all duration-300 ${statusColors[update.status]}`}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <div className="relative">
              <select
                name="priority"
                value={update.priority}
                onChange={HandleChange}
                className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none transition-all duration-300 ${priorityColors[update.priority]}`}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-xl text-white font-medium transition-all duration-300 ${
              isLoading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-800 hover:shadow-md"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                  ></path>
                </svg>
                Updating...
              </span>
            ) : (
              "Update Task"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskEdit;