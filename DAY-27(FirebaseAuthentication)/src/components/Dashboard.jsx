import { onAuthStateChanged } from 'firebase/auth';
import { use, useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { PuffLoader } from 'react-spinners';

export default function Dashboard() {
  const [uid, setUid] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState("Loading...");
  const [record, setRecord] = useState({ task: '', priority: '' });
  const [localData, setLocalRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    })
  }, [])

  useEffect(() => {
    if (uid) {
      fetchUser();
      fetchRecords();
    }
  }, [uid])

  const handleLogout = async () => {
    await auth.signOut();
    setUserData(null)
    toast.success('Logged out successfully!')
    navigate('/signIn');
  }

  const fetchUser = async () => {
    await getDoc(doc(db, 'users', uid))
      .then((res) => {
        setUserData(res.data());
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      })
  }

  const fetchRecords = async () => {
    await getDocs(collection(db, 'tasks'))
      .then((res) => {
        let data = res.docs.map((el, i) => {
          return { id: el.id, ...el.data() }
        }).filter((el) => el.userId === uid);
        setLocalRecord(data);
      })
  }

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id))
      .then((res) => {
        console.log(res);
        setLocalRecord(localData.filter((el) => el.id !== id));
        toast.success('Task Deleted!')
      })
  }

  const updateTask = (id) => {
    let singleTask = localData.find((el) => el.id === id);
    setEditIndex(id)
    setRecord(singleTask);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (editIndex == null) {
      await addDoc(collection(db, 'tasks'), { userId: uid, ...record })
        .then((res) => {
          setLocalRecord([...localData, { id: res.id, ...record }]);
          toast.success('Task Added!')
        })
    } else {
      await updateDoc(doc(db, 'tasks', editIndex), record)
        .then((res) => {
          fetchRecords();
          toast.success('Task Updated!')
        })
    }

    setRecord({ task: '', priority: '' });
    setEditIndex(null)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ?
        <PuffLoader
          color='#FFF'
          className='loader'
        /> :
        <div>
          <h2>Welcome, {userData.name}</h2>
          <button onClick={handleLogout}>Logout</button>  <br /><br />
          <div className='main'>
            <div className="task-list">
              <h2>Tasks</h2>
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {localData.map((el, i) => {
                    return (
                      <tr key={el.id}>
                        <td>{i + 1}</td>
                        <td>{el.task}</td>
                        <td>{el.priority}</td>
                        <td className='action'>
                          <i onClick={() => deleteTask(el.id)} className="fa-solid fa-xmark"></i>
                          <i onClick={() => updateTask(el.id)} className="fa-solid fa-pencil"></i>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </div>
            <form action="" onSubmit={handleOnSubmit}>
              <h2>Add Task</h2>
              <label htmlFor="">Task</label>
              <input type="text" name='task' value={record.task} onChange={handleOnChange} />
              <label htmlFor="">Priority</label>
              <select name="priority" value={record.priority} id="" onChange={handleOnChange}>
                <option hidden>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <button className='btn'>{editIndex == null ? "Add Task" : "Update Task"}</button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}
