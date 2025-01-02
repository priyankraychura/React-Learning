import './Navbar.css'
import primaryLogo from '../assets/images/primary-logo.svg'


function Navbar() {
  return (
   <>
    <nav>
        <div className="logo">
            <img src={primaryLogo} alt="" />
        </div>
        <div className="address">
            <h2>Delivery in <span>13 Mins</span></h2>
            <h5>Chhatrapati Shivaji Terminus Area, Fort... <i class="fa-solid fa-chevron-down"></i></h5>
        </div>
        <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" name="" id="" placeholder='Search for over 5000 products' />
        </div>
        <div className="login">
            <i class="fa-regular fa-user"></i>
            <span>Login</span>
        </div>
        <div className="cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>
        </div>
    </nav>
   </>
  );
}

export default Navbar;