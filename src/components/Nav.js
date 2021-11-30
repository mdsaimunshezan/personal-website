import React from 'react'
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Nav = () => {
    const navVariants = {
        hidden:{
            y:"-20vh",
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                delay:0.2,
                duration:0.5
            }
        }
    }
    return (
        <>
            <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"

            >
                <ul>
                    <li><NavLink to="/" exact activeClassName="active__nav">Home</NavLink></li>
                    <li><NavLink to="/skill" exact activeClassName="active__nav">Skill</NavLink></li>
                    <li><NavLink to="/project" exact activeClassName="active__nav">Project</NavLink></li>
                    <li><NavLink to="/conteck" exact activeClassName="active__nav">Conteck</NavLink></li>
                </ul>
            </motion.nav>
        </>
    )
}

export default Nav
