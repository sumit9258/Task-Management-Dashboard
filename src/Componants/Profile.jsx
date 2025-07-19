import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileAction } from "../../Actions/AuthAction";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  console.log(user);

  const logout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(ProfileAction(token));
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md transform transition-all duration-500 hover:shadow-2xl animate-slide-down">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-4xl font-bold text-indigo-600">
              {user?.username?.charAt(0)?.toUpperCase() || "U"}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {user?.username || "User"}
          </h1>
          <p className="text-sm text-gray-600 mb-8">{user?.email || "email@example.com"}</p>
          <button
            onClick={logout}
            className="w-full py-3 px-4 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 hover:shadow-md transition-all duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;