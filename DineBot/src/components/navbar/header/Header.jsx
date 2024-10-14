// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <div className='header'>
//         <div className="header-contents">
//             <h2>Order your  favourite food here</h2>
//             <p>Choose from the diverse menu</p>
//             <button>View Menu</button>
//         </div>
      
//     </div>
//   )
// }

// export default Header
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click
  const handleViewMenu = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from the diverse menu</p>
        <button onClick={handleViewMenu}>View Menu</button> {/* Add onClick */}
      </div>
    </div>
  );
};

export default Header;
