import React from 'react'
import coding from '../assets/coding.jpg'
import arch from '../assets/architecture.png'
import database from '../assets/database.jpg'
import gps from '../assets/gps.jpg'
import drone from '../assets/drone.jpg'
import blockchain from '../assets/blockchain.png'


const Services = () => {
    return(
        <div id="services" className="services--container">
            <div className='card'>
                <img src={coding} alt='Software Development'/>
                <h3>Software Development</h3>
                <p>Whether automating backend data management tasks with Python & 
                    SQL, or developing the HTML/CSS/JavaScript 
                    front-end for your next web application, we can help! 
                </p>
            </div>
            <div className='card'>
                <img src={arch} alt='System Architecture'/>
                <h3>System Architecture</h3>
                <p>Drawing on our experience in the design and implementation 
                    of large enterprise-level systems, 
                    we can work with you to develop the right mix of 
                    hardware and software for your new or existing GIS. 
                </p>
            </div>
            <div className='card'>
                <img src={database} alt='Database Administration'/>
                <h3>Database Administration</h3>
                <p>We have experience adminstering very large database systems. 
                    Whether your system is running on Oracle, 
                    SQL Server or Postgres, we can manage all aspects of 
                    your database with excellent uptime and efficiency. 
                </p>
            </div>
            <div className='card'>
                <img src={gps} alt='GPS Data Collection'/>
                <h3>Data Collection</h3>
                <p>Using steadfast techniques and the latest GPS technology, we 
                    can collect, process and deliver quality data 
                    products for the collection phase of your next project. 
                </p>
            </div>
            <div className='card'>
                <img src={drone} alt='UAV/Drones'/>
                <h3>Drones</h3>
                <p>We are fully licensed with the FAA to fly commercial UAVs. 
                    We have a fleet of drones and sensors to collect high resolution 
                    imagery and elevation data.
                </p>
            </div>
            <div className='card'>
                <img src={blockchain} alt='Blockchain'/>
                <h3>Blockchain</h3>
                <p>The world of NFT's, web3 and blockchain technology is growing rapidly.
                    We can help you develop your next big idea!
                </p>
            </div>
        </div>
    )
}
export default Services