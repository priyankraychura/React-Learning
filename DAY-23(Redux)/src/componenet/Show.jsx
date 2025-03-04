import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteUser, showUser, singleUser } from '../features/crudSlice';


export default function Show() {
  const dispatch = useDispatch();
  const loading  = useSelector((state) => state.loading)
 useEffect(() => {
   dispatch(showUser())
 },[])
  

  const users = useSelector((state)=>state.app.users)
  return (
    <div>
        <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Name:</strong> {user.name} | <strong>Class:</strong> {user.cls} <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
              <button onClick={()=>dispatch(singleUser(user.id))}>edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
}
