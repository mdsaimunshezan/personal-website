import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"

const Project = () => {
    const [poject, setPoject] = useState([])

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setPoject(data))
    },[])

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
           <div className="my__side">
           <motion.div 
            variants={pojectVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="poject container">
                <div className="poject__title">
                    <h3>My Poject</h3>
                </div>
                <div className="row mt-4 gy-5">
                    {
                        poject.map(item => {
                            return <div className="col-md-4 col-sm-4 col-12" key={item.id}>
                               
                                <div className="hidden">
                                <div className="card" style={{border:"2px solid #11998e"}}>
                                    <img src={item.img3} alt={item.img3} style={{height:"80px"}} className="img-fluid" />
                                    <div className="project__name">
                                        <h5>{item.website}</h5>
                                    </div>
                                    <div className="project__dec">
                                        <h6>{item.use}</h6>
                                    </div>
                                    <Link to={`/project/${item.id}`}>
                                    <button className="project__btn">Detalse</button>
                                    </Link>
                                  
                                </div>
                                </div>
                               
                            </div>
                        })
                    }
                </div>
            </motion.div>
           </div>
        </>
    )
}

export default Project
