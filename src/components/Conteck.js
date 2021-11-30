import React from 'react'
import emailjs from "emailjs-com"

const Conteck = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm("service_pmjxatc","template_ugmmker",e.target,"user_SSirWxIt7cqdFqRE1zsLY")
        .then((res)=>{
            console.log(res);
            alert("successfull");
        })
        .catch(err=>console.log(err.message))
    }


    return (
        <div style={{padding:"0px 20px"}}>
            <div className="poject__title">
                    <h3 >Conteck Me</h3>
                </div>
            <div className="conteck">
            
                <div className="conteck__form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Enter your name" className="conteck__input"/>
                        <input type="email" name="user_email" placeholder="Enter your email" className="conteck__input"/>
                        <textarea  id="" name="message" placeholder="Enter your message" className="conteck__input" cols="30" rows="5"></textarea>
                        <button type="submit" className="conteck__btnt">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Conteck;
