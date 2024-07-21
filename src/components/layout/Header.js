import { useContext } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { auth } from '../../components/firebase.js'

const Header = () => {
  const shoppingContext = useContext(ShoppingContext)
  const { basket, user } = shoppingContext
  console.log(user)

  const handleAuth = () => {
    if (user) {
        auth.signOut()
    }
  }
  return (
   
       <header className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header_logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">          
          <Link to={user ? "/" : "/login"}>
          <div className="header_option" onClick={handleAuth}> 
            <span className="header_optionOne">Hello {user === null ? "Guest" : user.email}</span>
            <span className="header_optionTwo">{user === null ? 'Sign In' : 'Sign Out'}</span>
          </div>     
          </Link>   
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
          <ShoppingBasketIcon className="" />
          <span className="header_optionTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>
        
      </div>
    </header> 
      


  );
};

export default Header;
