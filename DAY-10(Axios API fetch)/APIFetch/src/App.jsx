import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import AddProducts from './components/addProduct'
import ShowProducts from './components/showProducts'
import Header from './components/Header'

function App() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    img_url: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    axios.get("https://677659d912a55a9a7d0b5ce0.mockapi.io/jobdb/products")
    .then((res) => {
      setProducts(res.data);
      console.log(res.data);
    })
  }, [formData])

  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://677659d912a55a9a7d0b5ce0.mockapi.io/jobdb/products", formData).
    catch((err) => {
      console.log(err);
    })

    setFormData({
        title: '',
        img_url: '',
        description: '',
        price: ''
    });
    
  }

  return (
    <>
      <Header></Header>
      {
        show ? <ShowProducts />
        : <AddProducts show={setShow} handleSubmit={handleSubmit} handleOnChange={handleOnChange} formData={formData}/>
      }
    </>
  )
}

export default App
