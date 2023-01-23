import React from 'react'
//import icons:
import { IconContext } from "react-icons"
import { SlLocationPin } from "react-icons/sl"

export default function Footer() {
    return (
        <div className='footer-container'>

            <footer>
                <IconContext.Provider value={{ color: "white", size: "2rem", title: "icon" }}>
                    <span><SlLocationPin /></span>
                </IconContext.Provider>
                <p>Rue Ras Jebel-Bizerte, Hriza El Alia Bizerte</p>
            </footer>
        </div >
    )
}
