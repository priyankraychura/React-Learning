import React, { useEffect, useState } from 'react'
import './UsersList.css'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import EditData from './EditData';

function UsersList() {
  const [editFrom, setEditForm] = useState(false)
  const [users, setUsers] = useState([])
  const [editId, setEditId] = useState(null)
  
  const userCollection = collection(db, "users");

  const getData = async () => {
      let userData = await getDocs(userCollection);

      let fetchedUsers = userData.docs.map((el) => {
          return {id: el.id, ...el.data()}
      })
      setUsers(fetchedUsers);
  }

  useEffect(() => {
      getData();
  }, [])

  const handleOnDelete = async (id) => {
    let del = doc(db,"users", id)
   
    await deleteDoc(del)

    getData()
  }

  const handleOnEdit = (id) => {
    setEditForm(true)
    setEditId(id)
  }
    
  return (
    <div>
      { editFrom ? <EditData id={editId} users={users}/> :
        <div className="usersList">
        <table>
            <thead>
                <tr>
                <th>Index</th>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                users.map((el, index) => {
                    return (
                        <tr key={el.id}>
                            <td>{index}</td>
                            <td>{el.id}</td>
                            <td>{el.username}</td>
                            <td>{el.email}</td>
                            <td>{el.password}</td>
                            <td>
                               <div className="actions">
                               <i class="fa-solid fa-pen-to-square" onClick={() => handleOnEdit(el.id)}></i>
                               <i class="fa-solid fa-trash-can" onClick={() => handleOnDelete(el.id)}></i> 
                               </div>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
      </div>}
    </div>
  )
}

export default UsersList
