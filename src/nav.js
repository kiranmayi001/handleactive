import React from 'react';


function Nav(){
    return(
          
          <header>
            <nav className="top-bar">
              <div className="left-menu">
                <div className="logo">
                   <a href="/">TRAVELLER</a>
                </div>
                      <a href="/" >Trips</a>
                      <a href="/" >About</a>
                      <a href="/" >ContactS</a>
                </div>
                      <div className="right-menu">
                         <div className="bell-div">
                              <i  class="fas fa-search"></i>  
                              <i className="bell-icon"  class="fas fa-bell" ></i>
                           </div>
                              <image src="https://www.oneepicplace.com/wp-content/uploads/2019/04/JOEY-SUP.png" alt="account-picture"/>          
                         </div>
            </nav>
          </header>
          
   
    );
}

export default Nav;