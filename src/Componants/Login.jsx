import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../Actions/AuthAction";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!data.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!data.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      let res = await dispatch(LoginAction(data));
      console.log("resssssssss", res);

      if (res?.token) {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      setErrors((prev) => ({ ...prev, password: "Login failed. Please try again." }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md transform transition-all duration-500 hover:shadow-2xl animate-slide-down">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Welcome Back
        </h2>
        <form onSubmit={HandleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={HandleChange}
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.email ? "border-red-400" : "border-gray-200"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 animate-slide-in">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={HandleChange}
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.password ? "border-red-400" : "border-gray-200"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500 animate-slide-in">{errors.password}</p>
            )}
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
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;