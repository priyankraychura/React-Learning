import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy policy</li>
                    <li>Contact Us</li>
                </ul>
                <ul className='icons-group'>
                    <li className='icons'><i className="fa-brands fa-facebook-f"></i></li>
                    <li className='icons'><i className="fa-brands fa-instagram"></i></li>
                    <li className='icons'><i className="fa-brands fa-x-twitter"></i></li>
                    <li className='icons'><i className="fa-brands fa-youtube"></i></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
