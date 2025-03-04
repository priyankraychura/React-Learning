import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addUser, empty, updateUser } from '../features/crudSlice';

const Create = () => {
  const [users, setUsers] = useState({ name: "", cls: "" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);
  const editUser = useSelector((state) => state.app.editUser);

  // Populate the form with editUser data when editing
  useEffect(() => {
    if (Object.keys(editUser).length > 0) {
      setUsers(editUser);
    } else {
      setUsers({ name: "", cls: "" });
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(editUser).length > 0) {
      dispatch(updateUser(users)); // Dispatch update action
      console.log(users);
      
      dispatch(empty()); // Clear editUser in Redux
    } else {
      dispatch(addUser(users)); // Dispatch add action
    }
    
    setUsers({ name: "", cls: "" }); // Reset form after submission
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={users.name} onChange={handleChange} placeholder="Enter name" />
        <input type="text" name="cls" value={users.cls} onChange={handleChange} placeholder="Enter class" />
        <button type="submit" disabled={loading}>
          {Object.keys(editUser).length > 0 ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Create;
