import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)
    return(
        <nav>
            <div className='logo--bars'>
                <div>
                    <h2>Solid Data Solutions</h2>
                </div>
                <div className="menu--icon" onClick={() => setMenuClick(prev => !prev)}>
                    {menuClick ? <div className='times'><FaTimes size={24} /></div>: <div className='bars'><FaBars size={24}/></div>}
                </div>
            </div>

            <div className={menuClick ? 'nav--links' : 'nav--links close'}>
                <a onClick={() => setMenuClick(false)} href="#top">Home</a>
                <a onClick={() => setMenuClick(false)} href="#services">Services</a>
                <a onClick={() => setMenuClick(false)} href="#about">About</a>
                <a onClick={() => setMenuClick(false)} href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar