import './Products.css'

function AddProducts({handleSubmit, handleOnChange, formData}) {
    return (
        <>
           <div className="add-main">
           <div className="add-from">
           <div className="top">
            <h2>Add Products</h2>
            <h5 className='show'>Show Products</h5>
           </div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Title</label>
                <input type="text" name='title' onChange={handleOnChange} value={formData.title}/>
                <label htmlFor="">Image URL</label>
                <input type="text" name='img_url' onChange={handleOnChange} value={formData.img_url}/>
                <label htmlFor="">Description</label>
                <input type="text" name='description' onChange={handleOnChange} value={formData.description}/>
                <label htmlFor="">Price</label>
                <input type="number" name='price' onChange={handleOnChange} value={formData.price}/>
                <button type='submit' className='add-btn'>Add Product</button>
            </form>
           </div>
           </div>
        </>
    )
}

export default AddProducts