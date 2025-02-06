import styles from '../NavBar/NavBar.module.scss';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const NavBar = ({ user, handleSignOut }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        
        <div className={styles.navContainer}>
            <img src="/images/header-background.svg" alt="" />
            <NavLink to="/">
                <h1>Local Heroes</h1>
            </NavLink>
            <nav>
                <div 
                className={styles.menu} 
                onClick={() => {
                    setMenuOpen(!menuOpen)
                    console.log("menu clicked!");
                    console.log(menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? `${styles.open}` : ""}>
                    
                    { user ? <>
                        <li><NavLink to="/" onClick={() => {setMenuOpen(false)}}>Dashboard</NavLink></li>
                        <li><NavLink to="/jobs" onClick={() => {setMenuOpen(false)}}>See Jobs</NavLink></li>
                        <li><NavLink to="/helpers" onClick={() => {setMenuOpen(false)}}>See helpers</NavLink></li>
                        <li><NavLink to="" onClick={() => {handleSignOut()}}>Sign Out</NavLink></li>
                    </>
                        : 
                    <>
                        <li><NavLink to="/signin" onClick={() => {setMenuOpen(false)}}>Sign In</NavLink></li>
                        <li><NavLink to="/signup" onClick={() => {setMenuOpen(false)}}>Sign Up</NavLink></li>
                    </>}
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;