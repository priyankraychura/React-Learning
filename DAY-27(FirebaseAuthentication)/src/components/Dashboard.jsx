import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const [ uid, setUid ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUid(user.email);
      } else {
        setUid(null);
      }
    })
  }, [])

  const handleLogout = () => {
    auth.signOut();
    navigate('/signIn');
  }
 
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{uid}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
