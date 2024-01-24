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
    


return (
    <div>
      <nav className='navbar'>
        <div className='navbar-brand'>
         <a 
         className='navbar-item'
         rel='noreferrer'
         target='_blank'
         href="https://github.com/JoshysHERE">
         </a>
          <span className='content is-bold'>Joshua Soto</span>
        
        </div>
      </nav>
      
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
       
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;