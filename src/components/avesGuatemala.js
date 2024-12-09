import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const AvesGuatemala = () => {
    const [aves, setAves] = useState([]);
    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

    useEffect(() => {
        axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala')
            .then(response => {
                setAves(response.data.recordings)
            })
            .catch(error => {
                console.error("No se puedo obtener la información", error);
            });
    }, []);

    return (
        <div style={{   textAlign: 'left', 
                        marginTop: '50px', 
                        marginLeft: '5px',
                        backgroundColor: '#90ee90'}}>
            <h1>Aves de Guatemala</h1>
            {aves.map((ave, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h2>{ave.en}</h2>
                    <p><strong>Familia: </strong> {ave.gen}</p>
                    <p><strong>Ubicacion: </strong>{ave.loc}</p>
                    <p><strong>Investigador: </strong>{ave.rec}</p>
                    <button onClick={home} style={{
                        backgroundColor: "#fff000",
                        borderRadius: "2px",
                    }}>Regresar</button>
                </div>
            ))}


        </div>
    );
};

export default AvesGuatemala;