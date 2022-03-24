import React from 'react'
import joe from '../assets/joe_adventure.png'


const About = () => {
    return(
        <div id="about" className="about--container">
            <div className="about--inner">
                <img src={joe} alt="Joe Briggs"/>
                <div className="about--text">
                    <h2>About</h2>
                    <p>Joe Briggs is the owner of <i>Solid Data Solutions</i>. His passion for 
                        problem solving and understanding the world around us has led him on a ~17 year 
                        journey in the GIS/IT industry. His experience ranges from GPS data collection to 
                        full-stack web application development. He fully understands all phases and aspects 
                        of implementing and operating a successful GIS and strives to stay on the forefront of 
                        the latest trends in software development. His hobbies include mountain biking, cycling, 
                        golf, the occasional adventure race, nerding out on video games, 
                        and delving into blockchain and crypto.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About