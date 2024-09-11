import React, { useState } from 'react';



const HolaMundo = ({friend}) => {
    const [estado, setEstado] = useState('')
    
    const mostrarEstado = ()=>{
setEstado(' (from change state)')
    }

    return (
        <>
        <div>
            {friend}{estado}
           </div>
           
        <button onClick={mostrarEstado}>CLICK ACA</button>
        </>
    );
};

export default HolaMundo;