import { useState } from 'react';
import './ProductsOps.css';


function ProductOps() {
    const [isAddProduct, setIsAddProduct] = useState(true);  
    const [pName, setPName] = useState("");
    const [pPrice, setPPrice] = useState("");
    const [pDesc, setPDesc] = useState("");
    const [pImage, setPImage] = useState("");

    const [pData, setPData] = useState([]);

    const handleAddProduct = () => {
        let obj = {
            pName,
            pPrice,
            pDesc,
            pImage
        }
        setPData([...pData, obj]);
        setPName("");
        setPPrice("");
        setPDesc("");
        setPImage("");
    }

    console.log(pData);
    

    return (
        <>
            <div>
                { isAddProduct ? <div className="main">
                    <div className="add-form">
                        <div className="header"><h2>Add Product</h2> <h3 onClick={() => setIsAddProduct(false)}>Show Products</h3></div>
                        <label htmlFor="pName">Product Name: </label>
                        <input type="text" value={pName} placeholder="Product Name" onChange={(e) => setPName(e.target.value)}/>
                        <label htmlFor="pPrice">Product Price: </label>
                        <input type="number" value={pPrice} placeholder="Product Price" onChange={(e) => setPPrice(e.target.value)}/>
                        <label htmlFor="pDesc">Product Description: </label>
                        <input type="text" value={pDesc} placeholder="Product Description" onChange={(e) => setPDesc(e.target.value)}/>
                        <label htmlFor="pImage">Product Image: </label>
                        <input type="text" value={pImage} placeholder="Image URL" onChange={(e) => setPImage(e.target.value)}/>
                        <button onClick={handleAddProduct}>Add Product</button>
                    </div>
                </div>: 
                    <div>
                        <div className="header products-header"><h2>Most Populer Products</h2> <h3 onClick={() => setIsAddProduct(true)}>Add Product</h3></div>
                        <div className="products">
                            {
                                pData.map((product) => {
                                    return (
                                        <div className="product-card">
                                            <img src={product.pImage} alt={product.pName}/>
                                            <div className="content">
                                                <h3>Item Name: {product.pName}</h3>
                                                <p>Item Description: {product.pDesc}</p>
                                                <p>Item Price: {product.pPrice}</p>
                                            </div>
                                            <button> + Add to Cart</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default ProductOps