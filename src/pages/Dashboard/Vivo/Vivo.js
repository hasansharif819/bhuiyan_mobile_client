import React, { useEffect, useState } from 'react';
import VivoLoad from './VivoLoad';

const Vivo = () => {
    const [values, setValues] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/vivo')
        .then(res => res.json())
        .then(data => setValues(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-primary'>VIVO</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-10 p-5'>

                {
                    values.map(value => <VivoLoad
                        key={value._id}
                        value={value}
                    ></VivoLoad>
                    )}
                    </div>
        </div>
    );
};

export default Vivo;