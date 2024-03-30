import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../store/reducers/UserReducer";

function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="w-full h-screen bg-red-50 flex flex-col items-center gap-4">
      <h1 className="text-red-800 pt-5 font-semibold text-2xl">Users List</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id} className="text-black">
            <h1 className="text-black">
              <span>{item.title}</span>
              <span
                onClick={() => deleteHandler(item.id)}
                className="text-red-600 font-black cursor-pointer p-2"
              >
                X
              </span>
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
