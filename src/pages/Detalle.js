import React from 'react';
import DetallePelicula from '../components/DetallePelicula/DetallePelicula';

function Detalle(props) {
    return (
        <div>
            <h2>Detalles de la Película</h2>
            <DetallePelicula match={props.match} />
        </div>
    );
}

export default Detalle;