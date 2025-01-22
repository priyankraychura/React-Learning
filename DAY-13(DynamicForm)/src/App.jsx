import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './components/userInfo'
import UsersList from './components/usersLislt'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PrimarySearchAppBar from './components/AppBar'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    image: "",
    skills: [""]
  });
  const [showForm, setShowForm] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


const handleAddSkills = () => {
    setFormData({
        ...formData, 
        skills: [...formData.skills, ""]
    })
}

const handleRemove = (e) => {
    if (formData.skills.length > 1) {
        setFormData({
            ...formData,
            skills: formData.skills.slice(0, -1)
        });
    }        
}

const handleDelete = (el, index) => {
    let arr = [...formData.skills];
    arr.splice(index, 1)
    setFormData({...formData, skills: arr})
}

const handleOnChange = (e) => {
    const {name, value} = e.target;
    if(isNaN(name)) {
        setFormData({...formData, [name]: value})
    } else {
        let arr = [...formData.skills];
        arr[name] = value;
        setFormData({...formData, skills: arr})
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users", formData)
    .catch((err) => {
        console.log(err);
    })
    setFormData({
        name: "",
        email: "",
        number: "",
        image: "",
        skills: [""]
    })
}

console.log(formData);


  return (
    <>
     <ThemeProvider theme={darkTheme}>
     <CssBaseline />
     <PrimarySearchAppBar setShowForm={setShowForm} showForm={showForm}/>
      {
        showForm ? 
          <UserInfo formData={formData} handleAddSkills={handleAddSkills} handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleDelete={handleDelete}/>
          : <UsersList />
      }
      </ThemeProvider>
    </>
  )
}

export default App
