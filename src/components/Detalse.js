import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const Detalse = () => {
    const [detalse, setDetalse] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setDetalse(data))
    }, [id])



    const filterItem = detalse.find(item => item.id === parseInt(id))

    return (
        <div>

            <div className="container detalse">
                <h1 className="detalse__name">{filterItem?.name}</h1>
                <div className="row">
                    <div className="col-md-4">
                        <img src={filterItem?.img3} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={filterItem?.img2} alt="" className="img-fluid" />

                    </div>
                    <div className="col-md-4">
                        <img src={filterItem?.img1} alt="" className="img-fluid" />

                    </div>
                </div>
                <h2 className="detalse__website">Name: {filterItem?.website}</h2>
                <p className="detalse__dec">{filterItem?.dec}</p>
                <h4 >Tecnology: {filterItem?.teconlogy}</h4>
                <div className="detalse__link">
                    <a target="_blank" className="detalse__link-code" href={filterItem?.url} >Live Site</a>
               
                    <a target="_blank" className="detalse__link-code--active" href={filterItem?.codeClind} >Code Link</a>
                    </div>
               
            </div>
        </div>
    )
}

export default Detalse
