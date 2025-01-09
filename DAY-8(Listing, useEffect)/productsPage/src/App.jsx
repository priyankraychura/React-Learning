import { useEffect, useState } from 'react'
import './App.css'
import { Puff } from 'react-loader-spinner'

function App() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
      console.log(res.products);
      setProducts(res.products)
    })
  }, [])

  return (
    <>
      <header>
        <h1>Products</h1>
      </header>
      { products ? <div className="main">
        {
        products.map((el) => {
          return (
            <div key={el.id} className='card'>
              <div className="img">
                <img src={el.thumbnail} alt={el.title} />
              </div>
              <div className="details">
                <h3>{el.title}</h3>
                <p>₹{el.price}</p>
                <span><i class="fa-solid fa-star"></i> {el.rating}</span>
              </div>
              <button className='cart-btn'>Add to Cart</button>
            </div>
          )
        })
      }
      </div> :
        <div className="main-loader">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        </div>
      }
    </>
  )
}

export default App
