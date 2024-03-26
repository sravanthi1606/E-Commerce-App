import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavUserContext } from './RouterComponents';
import { AiOutlineLogout } from "react-icons/ai";
import logo_img from "../Assets/Login/logo_img.png"
import { toast } from 'react-toastify';

const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(NavUserContext);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        alert("Are you want to logout")
        if (isAuth) {
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("admin");
            setIsAuth(false);
        }
        navigate("*");
        toast.success("Successfully Logged Out !!")
    }


    return (
        <div className='navsection'>
            <div className='navbar'>
                <div className='image_home'>
                    <div>
                    <img src={logo_img} className='logo_img'></img>
                    </div>
                   <div>
                   {
                        isAuth && (
                            <Link to="/home" className='nav_items'>Home</Link>
                        )

                    }
                   </div>

                </div>
                <div>
                    <Link to="*" className='nav_items1' onClick={handleLogout}>
                        {isAuth ? <button>Sign Out <AiOutlineLogout /></button> : ""}
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
