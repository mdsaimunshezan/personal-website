import React, { useState } from 'react'
import { motion } from "framer-motion"

const Resome = () => {
    const [skill, setSkill] = useState([
        {
            id: 1,
            name: "HTML",
            skill: "90%"
        },
        {
            id: 2,
            name: "CSS",
            skill: "70%"
        },
        {
            id: 3,
            name: "BOOTSTRAP",
            skill: "60%"
        },
        {
            id: 4,
            name: "TAILWIND CSS",
            skill: "70%"
        },
        {
            id: 5,
            name: "REACT JS",
            skill: "75%"
        },
        {
            id: 6,
            name: "METERIAL UI",
            skill: "90%"
        },
        {
            id: 7,
            name: "NODE JS",
            skill: "60%"
        },
        {
            id: 8,
            name: "EXPRESS JS",
            skill: "60%"
        },
        {
            id: 9,
            name: "MONGO DB",
            skill: "50%"
        },
        {
            id: 10,
            name: "GIT / GITHUB",
            skill: "60%"
        },
    ])

    const resomeVariants = {
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
            variants={resomeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="resome container">
                <div className="row gy-5">
                    <div className="col-md-6 col-sm-6 col-12 skill__education">
                        <h3>Education</h3>
                        <h5>Diploma Enginrang, Computer Science</h5>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 skill__experience">
                        <h3>Experience</h3>
                        <h5>No Exprience</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="skill__title">
                        <h3>Language and Framework</h3>
                    </div>
                    {
                        skill.map(item => {
                            return <div className="col-md-6" key={item.id}>
                                <div className="bar">
                                    <div className="bar__wraper" style={{ width: item.skill }}>
                                        <div className="bar__name">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </motion.div>
        </>
    )
}

export default Resome
