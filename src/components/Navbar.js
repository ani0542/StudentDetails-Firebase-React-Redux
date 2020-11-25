import React from "react";
import { Link } from "react-router-dom";
import student from '../assets/student.png'
import bike from '../assets/bike.jpeg'
import { useFirebase } from "react-redux-firebase";


const Navbar = () => {


  const firebase = useFirebase();


  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
                <img src={student} height='30px'/>
        </a>
     <Link to='/'>
     
    
        <button className='btn btn-light'>
        
               Go to Home Page
        </button>

    </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="dropdownContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dropdownContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/studentForm" className="btn btn-primary mr-3">
                Add Student
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              > 
               <img src={bike} alt='error' height='30px' style={{borderRadius:'50px'}}/>
                <span className="ml-2 navbar-text">Animesh Awasthi</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="!#">
                  Profile
                </a>
                <a
                  className="dropdown-item"
                  href="!#"
                  onClick={()=>firebase.logout()}
                >
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="!#">
                  Ads
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;