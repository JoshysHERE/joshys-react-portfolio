import React, { useState } from 'react';
import About from "./About";
import Port from "./Port";
import Nav from "./Nav";


function Header() {
    const [currentPage, handlePageChange] = useState("About");
       
      const renderPage = () => {
        switch (currentPage) {
            case "About":
                return<About />; 
            case "Port":
                return<Port />;           

                default:
                    return<About />;
        } 
      };
    }


export default Header;