import React from "react";

const Header = () => {
  return (    
    <header>
      <div className="logo">
        <img src={ require('./../../assets/images/prospace.svg') } alt="prospace" />
      </div>
      <nav>
        <ul>
          <li>
            <button className="btn-primary"><i className="ti-plus "></i>&nbsp;Company</button>
          </li>
          <li>
            <button className="btn-primary"><i className="ti-plus "></i>&nbsp;Office</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
