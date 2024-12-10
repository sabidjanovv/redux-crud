import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../redux/slices/user-slice";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    profession: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.first_name.trim() &&
      user.last_name.trim() &&
      user.age &&
      user.profession.trim() &&
      user.gender
    ) {
      dispatch(addUser(user));
      navigate("/users");
    } else {
      alert("Please fill all fields correctly");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 bg-gray-100 border rounded-lg shadow-md max-w-md mx-auto mt-5"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Automatic Add just test</h2>
      <div className="mb-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={user.first_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={user.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={user.profession}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add User
      </button>
    </form>
  );
};

export default CreateUser;
