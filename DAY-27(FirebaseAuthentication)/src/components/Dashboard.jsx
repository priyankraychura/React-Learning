import { onAuthStateChanged } from 'firebase/auth';
import { use, useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { doc, getDoc } from 'firebase/firestore';
import { PuffLoader } from 'react-spinners';

export default function Dashboard() {
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState("Loading...");
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

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? 
        <PuffLoader 
          color='#FFF'
          className='loader'
        />:
        <div>
          <h2>Welcome, {userData.name}</h2>
          <h2>{userData.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      }
    </div>
  )
}
