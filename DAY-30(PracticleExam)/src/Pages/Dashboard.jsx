import React, { useEffect, useState } from 'react'
import '../styles/Dashboard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import axios from 'axios';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [deleted])

  const handleDelete = (id) => {
    let res = confirm("Are you sure, you want to delete?");
    if (res) {
      axios.delete(`http://localhost:3000/products/${id}`)
        .then((res) => {
          setDeleted(!deleted)
          alert("Product deleted successfully!")
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }


  return (
    <div className='main-list'>
      {
        products.length > 0 ? products.map((el) => {
          return <Card sx={{ maxWidth: 345 }} key={el.id}>
            <CardMedia
              sx={{ height: 250 }}
              image={el.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Price: ₹ {el.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button onClick={() => handleDelete(el.id)} size="small">Delete</Button>
            </CardActions>
          </Card>
        }) : <h1>Loading...</h1>
      }

    </div>
  )
}
