import React from 'react'
import img from "../Images/image.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import resome from "../Images/cv.pdf"
import { motion } from "framer-motion"

const Sidebar = () => {
    const handleEmail = () => {
        window.open("mailto:saimunshezan@gmail.com")
    }
    const sideNavVariants = {
        hidden:{
            x:"-10vw",
            opacity:0
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                delay:0.2,
                duration:0.7
            }
        }
    }
    return (
        <>
            <motion.section
            variants={sideNavVariants}
            initial="hidden"
            animate="visible"
            className="sidebar__content"
            >
                <div className="sidebar">
                    <img src={img} alt="profile-image" className="profile__image rounded-circle" />
                    <div className="sidebar__name"> Md <span>saimun</span> </div>
                    <div className="sidebar__title">Web Developer</div>
                    <a href={resome} download="cv.pdf">
                        <div className="sider__resume"><CloudDownloadIcon className="icon" /> Downlode Resome </div>
                    </a>
                    <div className="sidebar__social__icon">
                        <a href=""><FacebookIcon className="icon" /></a>
                        <a href=""><InstagramIcon className="icon" /></a>
                    </div>
                </div>
                <div className="sidebar__conteck">
                    <a target="_blank" href="https://github.com/mdsaimunshezan">
                        <div className="github"><GitHubIcon className="icon" /> Github</div>
                    </a>
                    <div className="address"><PersonPinCircleIcon className="icon" />Barisal,Bangladesh</div>
                    <div className="email">saimunshezan@gmail.com</div>
                    <div className="phone">01303442021/01748153612</div>
                </div>
                <div className="sidebar__email__me" onClick={handleEmail}>
                    Email me
                </div>
            </motion.section>

        </>
    )
}

export default Sidebar
