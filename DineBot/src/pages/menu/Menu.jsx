// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Menu.css'; // Ensure you have CSS styles for layout
// // import { menu_list, food_list } from '../../assets/food/assets';

// // const Menu = () => {
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [orderedFood, setOrderedFood] = useState(null);
// //   const navigate = useNavigate(); // Use navigate from react-router-dom

// //   // Function to handle menu item click
// //   const handleMenuClick = (category) => {
// //     setSelectedCategory(category);
// //     setOrderedFood(null); // Clear previous orders when selecting a new category
// //   };

// //   // Filter food items based on the selected category
// //   const filteredFoodItems = selectedCategory 
// //     ? food_list.filter(item => item.category === selectedCategory)
// //     : [];

// //   // Function to handle food item click
// //   const handleFoodClick = (food) => {
// //     setOrderedFood(food); // Set the food being ordered
// //   };

// //   // Function to handle order confirmation
// //   const handleOrderConfirmation = (confirm) => {
// //     if (confirm && orderedFood) {
// //       // Navigate to Order Status page with the ordered food details
// //       navigate('/order-status', { state: { orderedFood, orderConfirmed: true }}); 
// //     } else {
// //       setOrderedFood(null); // Clear the ordered food if declined
// //     }
// //   };

// //   return (
// //     <div className="menu">
// //       <h1 className="heading">Our Menu</h1>
// //       <div className="menu-container">
// //         {menu_list.map((item) => (
// //           <div
// //             className="menu-item"
// //             key={item.menu_name}
// //             onClick={() => handleMenuClick(item.menu_name)}
// //           >
// //             <img src={item.menu_image} alt={item.menu_name} className="menu-image" />
// //             <h3 className="menu-name">{item.menu_name}</h3>
// //           </div>
// //         ))}
// //       </div>

// //       {selectedCategory && (
// //         <div className="food-container">
// //           <h2>{selectedCategory} Items</h2>
// //           <div className="food-list">
// //             {filteredFoodItems.length > 0 ? (
// //               filteredFoodItems.map(item => (
// //                 <div 
// //                   className="food-item" 
// //                   key={item._id} 
// //                   onClick={() => handleFoodClick(item)} // Click to order food
// //                 >
// //                   <img src={item.image} alt={item.name} className="food-image" />
// //                   <h3 className="food-name">{item.name}</h3>
// //                   <p className="food-price">${item.price}</p>
// //                   <p className="food-description">{item.description}</p>
// //                 </div>
// //               ))
// //             ) : (
// //               <p>No items available in this category.</p>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {/* Order Confirmation Dialog */}
// //       {orderedFood && (
// //         <div className="order-confirmation">
// //           <p>Do you want to order <strong>{orderedFood.name}</strong>?</p>
// //           <button onClick={() => handleOrderConfirmation(true)}>Yes</button>
// //           <button onClick={() => handleOrderConfirmation(false)}>No</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Menu;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Menu.css'; // Ensure you have CSS styles for layout
// import { menu_list, food_list } from '../../assets/food/assets';
// import Toast from '../toast/Toast'; // Import the Toast component

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [orderedFood, setOrderedFood] = useState(null);
//   const [toastMessage, setToastMessage] = useState('');
//   const [showToast, setShowToast] = useState(false);
//   const navigate = useNavigate();

//   // Function to handle menu item click
//   const handleMenuClick = (category) => {
//     setSelectedCategory(category);
//     setOrderedFood(null); // Clear previous orders when selecting a new category
//   };

//   // Filter food items based on the selected category
//   const filteredFoodItems = selectedCategory 
//     ? food_list.filter(item => item.category === selectedCategory)
//     : [];

//   // Function to handle food item click
//   const handleFoodClick = (food) => {
//     setOrderedFood(food); // Set the food being ordered
//     setToastMessage(`Do you want to order ${food.name}?`);
//     setShowToast(true); // Show the toast
//   };

//   // Function to handle order confirmation
//   const handleOrderConfirmation = (confirm) => {
//     if (confirm && orderedFood) {
//       // Navigate to Order Status page with the ordered food details
//       navigate('/order-status', { state: { orderedFood, orderConfirmed: true }}); 
//     }
//     setOrderedFood(null); // Clear the ordered food
//     setShowToast(false); // Hide the toast
//   };

//   // Function to handle toast close
//   const handleToastClose = () => {
//     setShowToast(false);
//   };

//   return (
//     <div className="menu">
//       <h1 className="heading">Our Menu</h1>
//       <div className="menu-container">
//         {menu_list.map((item) => (
//           <div
//             className="menu-item"
//             key={item.menu_name}
//             onClick={() => handleMenuClick(item.menu_name)}
//           >
//             <img src={item.menu_image} alt={item.menu_name} className="menu-image" />
//             <h3 className="menu-name">{item.menu_name}</h3>
//           </div>
//         ))}
//       </div>

//       {selectedCategory && (
//         <div className="food-container">
//           <h2>{selectedCategory} Items</h2>
//           <div className="food-list">
//             {filteredFoodItems.length > 0 ? (
//               filteredFoodItems.map(item => (
//                 <div 
//                   className="food-item" 
//                   key={item._id} 
//                   onClick={() => handleFoodClick(item)} // Click to order food
//                 >
//                   <img src={item.image} alt={item.name} className="food-image" />
//                   <h3 className="food-name">{item.name}</h3>
//                   <p className="food-price">${item.price}</p>
//                   <p className="food-description">{item.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No items available in this category.</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Toast for order confirmation */}
//       <Toast 
//         message={toastMessage}
//         isVisible={showToast}
//         onClose={handleToastClose}
//       />
//       <div className="toast-buttons">
//         {orderedFood && (
//           <>
//             <button onClick={() => handleOrderConfirmation(true)}>Yes</button>
//             <button onClick={() => handleOrderConfirmation(false)}>No</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Menu;

// src/pages/menu/Menu.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import { menu_list, food_list } from '../../assets/food/assets';
import Toast from '../toast/Toast'; // Import your Toast component

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [orderedFood, setOrderedFood] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (category) => {
    setSelectedCategory(category);
    setOrderedFood(null);
  };

  const filteredFoodItems = selectedCategory 
    ? food_list.filter(item => item.category === selectedCategory)
    : [];

  const handleFoodClick = (food) => {
    setOrderedFood(food);
    setShowToast(true); // Show the toast when an item is clicked
  };

  const handleOrderConfirmation = (confirm) => {
    if (confirm) {
      // Show message and ask if they want to track the order
      setShowToast(false); // Hide the toast for now
      alert(`Your order for ${orderedFood.name} is placed! Do you want to track your order?`);
      
      const wantToTrack = window.confirm('Do you want to track your order?');
      if (wantToTrack) {
        navigate('/order-status', { state: { orderedFood, orderConfirmed: true }}); 
      }
    } else {
      setOrderedFood(null); // Clear the ordered food if declined
      setShowToast(false); // Hide the toast
    }
  };

  return (
    <div className="menu">
      <h1 className="heading">Our Menu</h1>
      <div className="menu-container">
        {menu_list.map((item) => (
          <div
            className="menu-item"
            key={item.menu_name}
            onClick={() => handleMenuClick(item.menu_name)}
          >
            <img src={item.menu_image} alt={item.menu_name} className="menu-image" />
            <h3 className="menu-name">{item.menu_name}</h3>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="food-container">
          <h2>{selectedCategory} Items</h2>
          <div className="food-list">
            {filteredFoodItems.length > 0 ? (
              filteredFoodItems.map(item => (
                <div 
                  className="food-item" 
                  key={item._id} 
                  onClick={() => handleFoodClick(item)} 
                >
                  <img src={item.image} alt={item.name} className="food-image" />
                  <h3 className="food-name">{item.name}</h3>
                  <p className="food-price">${item.price}</p>
                  <p className="food-description">{item.description}</p>
                </div>
              ))
            ) : (
              <p>No items available in this category.</p>
            )}
          </div>
        </div>
      )}

      {/* Show Toast if orderedFood is set */}
      {showToast && (
        <Toast 
          message={`Do you want to place an order for ${orderedFood.name}?`}
          onConfirm={() => handleOrderConfirmation(true)} // Yes option
          onCancel={() => handleOrderConfirmation(false)} // No option
        />
      )}
    </div>
  );
};

export default Menu;
