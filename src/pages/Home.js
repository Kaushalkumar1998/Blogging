import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import background from "./Skull.jfif";


function Home() {
    return (
        <div style={{
            height: "745px",
            backgroundImage: `url(${background})`,
            backgroundPosition: "center"

        }}>
            <CustomNavbar />
            <h1 style={{
                textAlign: 'center',
                color: 'white'
            }}>This is My home page</h1>
            <p style={{
                textAlign: 'center',
                color: 'white'
            }}> Welcome to Home Page</p>




        </div>
    )
}

export default Home
