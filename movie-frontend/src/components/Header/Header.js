import React from 'react';
import { Link } from "react-router-dom"
import "./Header.css";

function Header() {
  return (    
    <div className="header">
      <Link to={`/`}>
        <h1>MovieApp</h1> 
      </Link>
                      
    </div>    
  );
}

export default Header;
