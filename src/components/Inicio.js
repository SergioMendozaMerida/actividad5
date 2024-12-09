import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


const Inicio = () => {
    const navigate = useNavigate();

    const handleCargar = () => {
        navigate('/aves-Guatemala');
    }
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1>Guía Ornitológica</h1>
            <h1>Guatemala</h1>
            <p>Sergio Darinel Mendoza Mérida</p>
            <p>22002686</p>
            <button onClick={handleCargar} style={
                {   backgroundColor: "#fff000",
                    borderRadius: "10px",
                    width: "30%",
                    height: "50px",
                    fontWeight: "600"
                }
            }>Ver Información</button>
        </div>
    );
};

export default Inicio;