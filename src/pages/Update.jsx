import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/slices/user-slice";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === id);
  const { first_name, last_name, age, profession, gender } = existingUser || {};
  const [user, setUser] = useState({
    first_name: first_name || "",
    last_name: last_name || "",
    age: age || "",
    profession: profession || "",
    gender: gender || "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id, ...user }));
    navigate(`/users`);
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="p-5 bg-gray-100 border rounded-lg shadow-md max-w-md mx-auto mt-5"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Update User</h2>
      <div className="mb-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
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
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
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
          onChange={(e) => setUser({ ...user, age: e.target.value })}
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
          onChange={(e) => setUser({ ...user, profession: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <select
          name="gender"
          value={user.gender}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
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
        Update User
      </button>
    </form>
  );
};

export default Update;
