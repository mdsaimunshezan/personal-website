import React, { useState } from 'react'

import { motion } from "framer-motion"

const About = () => {
    const [servis,setServis] =useState([
        {id:1,name:"Web Design",dec:"I provide all morder website with 1 years servies. and free domin and hoistin"},
        {id:2,name:"Fornt-End Development",dec:"I provide high-Quality mordern Fornt-End devlopment application."},
        
    ])


    const pojectVariants = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:.2,
                duration:.6
            }
        },
        exit:{
            opacity:0,
            transition:"easeInOut"
        }
    }
    return (
        <>
            <motion.div 
            variants={pojectVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="poject container">
                <div className="poject__title">
                    <h3>About Me</h3>
                </div>
              <p className="about__me">
                  I am saimun islma.i am a Front-End Developer and i am also a student. I have been practise in 6 month. i develop so many web applicatin like E-commarce, Health care , Travel, Student managemet app etc using HTML ,CSS , REACT, BOOTSTARP, NODE JS , EXPRESS JS, MONGO DB etc.i'm always ready to learn new things. 
              </p>
              <div className="poject__title" style={{marginTop:"20px"}}>
                    <h3>what I'm Doing</h3>
                </div>
                <div className="about__servies">
                    {
                        servis.map(item =>(
                            <div className="about__item" key={item.id}>
                                <h4 className="about__name">{item.name}</h4>
                                <p className="about__dec">{item.dec}</p>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </>
    )
}

export default About
