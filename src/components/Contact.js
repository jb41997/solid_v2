import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'


const Contact = () => {
    return(
        <div id="contact" className="contact--container">
            <div className="contact--text">
                <h3>Lets discuss your next solution!</h3>
            </div>
            <div className="contact--info">
                <HiOutlineMail size={24}/>&nbsp;&nbsp;<a href="mailto:info@soliddatasolutionsllc.com">info@soliddatasolutionsllc.com</a>
            </div>
        </div>
    )
}
export default Contact