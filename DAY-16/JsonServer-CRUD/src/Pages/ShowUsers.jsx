import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function ShowUsers() {
  const [formData, setFormData] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
      axios.get("http://localhost:3000/users")
        .then((el) => {
          setFormData(el.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }, [refresh])

  console.log(formData);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then((el) => {
        console.log(el);
        setRefresh(!refresh)
        alert("User deleted");
      })
      .catch((err) => {
        console.log(err);
      })
    
  }
  

  return (
    <div>
      <div className="main-table">
      {/* <h1>Show User</h1> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Number</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          formData.map((el) => {
            return (
              <>
                <tbody key={el.id}>
                <tr>
                  <td>{el.id}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td>{el.number}</td>
                  <td>{el.password}</td>
                  <td className='actions'>
                    <button className='action-btn edit-btn'><Link to={`/editUser/${el.id}`}>Edit</Link></button>
                    <button className='action-btn dlt-btn' onClick={() => handleDelete(el.id)}>Delete</button>
                  </td>
                </tr>
                </tbody>
              </>
            )
          })
        }
      </table>
      </div>
    </div>
  )
}

export default ShowUsers
