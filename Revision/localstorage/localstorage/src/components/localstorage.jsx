import React, { useState } from 'react'

function Localstorage() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    password: "",
  })
  const [editIndex, setEditIndex] = useState(null)
  const [showTable, setShowTable] = useState(false)

  const handleOnChnage = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (editIndex == null) {
      setUsers([...users, formData]);
      localStorage.setItem("users", JSON.stringify([...users, formData]))
    } else {
      let singleData = users.find((item) => item.id == editIndex);

      singleData.id = editIndex;
      singleData.name = formData.name;
      singleData.email = formData.email;
      singleData.password = formData.password;

      localStorage.setItem("users", JSON.stringify(users))
      setEditIndex(null);
      setShowTable(true)

    }

    setFormData({
      id: Date.now(),
      name: "",
      email: "",
      password: "",
    })
  }

  const handleOnDelete = (id) => {
    console.log(id);

    let updatedData = users.filter((el, idx) => el.id != id)
    console.log(updatedData);

    setUsers(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData))
  }

  const handleOnEdit = (id) => {
    let singleData = users.find((el, idx) => el.id == id)

    setFormData({
      name: singleData.name,
      email: singleData.email,
      password: singleData.password
    })

    setEditIndex(id)
    setShowTable(false)
  }



  return (
    <div className='main-div'>
      {showTable ?
        <div className="table-data">
          <div className="title">
            <h2>Localstorage View/Delete</h2>
            <span onClick={() => setShowTable(false)}>AddUser</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((el) => {
                  return (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.password}</td>
                      <td><button className='delete' onClick={() => handleOnDelete(el.id)}>Delete</button></td>
                      <td><button className='edit' onClick={() => handleOnEdit(el.id)}>Update</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        :
        <div>
          <div className="title">
            <h2>Localstorage Add/Edit</h2>
            <span onClick={() => setShowTable(true)}>ShowData</span>
          </div>
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter name' value={formData.name} name="name" onChange={handleOnChnage} />
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter email' value={formData.email} name="email" onChange={handleOnChnage} />
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Enter password' value={formData.password} name="password" onChange={handleOnChnage} />
            <button className='submit' onClick={handleOnSubmit}>{editIndex == null ? "Submit" : "Update"}</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Localstorage
