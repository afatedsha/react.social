// import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

// const setActive = navData => navData.isActive ? classes.active : classes.item; (другое написание для примера)
const setActive = ({isActive}) => isActive ? classes.active : classes.item;

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to='/profile' className = {setActive}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className = {setActive}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className = {setActive}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className = {setActive}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className = {setActive}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;