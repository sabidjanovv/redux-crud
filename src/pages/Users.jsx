import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, } from "../redux/slices/user-slice";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      dispatch(deleteUser(userId));
    }
  };


  const handleAddUser = () => {
    const newUserData = {
      id: uuidv4(),
      first_name: "Sardorbek",
      last_name: "Sobidjon",
      profession: "Prefer not to say",
      age: 20,
      gender: "Male",
    };
    dispatch(addUser(newUserData));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        User List
      </h2>
      <div className="mb-4 text-center">
        <button
          onClick={handleAddUser}
          className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400"
        >
          Automatic Adding
        </button>
      </div>
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center p-6">
                <div className="w-24 h-24 mb-3 bg-gray-200 rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-gray-600 text-lg font-medium">
                    {user.first_name[0]}
                  </span>
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user.first_name} {user.last_name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {user.profession}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Age: {user.age}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Gender: {user.gender}
                </span>
                <div className="flex justify-between items-center w-full mt-4">
                  <Link
                    to={`/edit/${user.id}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
