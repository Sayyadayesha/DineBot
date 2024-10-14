
// import React, { useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/food/assets'
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//     const [menu,setMenu] = useState("home");
//   return (
//     <div className='navbar'>
//         <img src={assets.logo} alt="" className="logo" />
//         <ul className="navbar-menu">
//             <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
//             <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
//             <li><Link to="/chatbot" className={menu === "Chat with Us" ? "active" : ""} onClick=
//             {() => setMenu("Chat with Us")}>Chat with Us</Link></li>
//             <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>
//         </ul>
//         <li><Link to="/chatbot">Chat with Us</Link></li>
//         <div className="navbar-right"><img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//             <img src={assets.basket_icon} alt="" />
//             <div className="dot"></div>
//         </div>
      
//         </div>
      
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'; // Make sure to import useState
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("home"); // Initialize state for menu

    return (
        <div className='navbar'>
            <img src={assets.logo2} alt="Restaurant Logo" className="logo" />
            <div className="container">
            <ul className="navbar-menu">
                <li>
                    <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <Link to="/menu" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</Link>
                </li>
                <li>
                    <Link to="/chatbot" onClick={() => setMenu("Chat with Us")} className={menu === "Chat with Us" ? "active" : ""}>Chat With Us</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</Link>
                </li>
            </ul>
            </div>
            
            </div>
       
    );
}

export default Navbar;

