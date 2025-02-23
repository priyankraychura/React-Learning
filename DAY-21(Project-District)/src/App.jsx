import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoute from './Routes/MainRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [eventData, setEventData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [sort, setSort] = useState(true);
  const [term, setTerm] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/events")
      .then((res) => {
        setEventData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    if (eventData.length > 0) {
      handleFilter("all");
    }
  }, [eventData]);


  let handleFilter = (type) => {
    console.log(type);
    const searchRes = eventData.filter((item) =>
      type == 'all' ? eventData : item.type == type
    )
    setFinalData(searchRes)
  }

  const handleSearch = (e) => {
    setTerm(e.target.value)
    console.log(term);

    const searchRes = finalData.filter((item) =>
      item.title.toLowerCase().includes(term.toLocaleLowerCase())
    )
    setFinalData(searchRes)
  }

  const handleSort = () => {
    setSort(!sort)
    console.log("hello");
    const searchRes = finalData.sort((a, b) =>
      sort ? a.price - b.price : b.price - a.price
    )
    setFinalData(searchRes)
  }



  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar handleFilter={handleFilter} handleSearch={handleSearch} handleSort={handleSort} />
        <MainRoute eventData={finalData} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
