import React, { useEffect, useState } from 'react';
import OppoLoad from './OppoLoad';

const Oppo = () => {
    const [values, setValues] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/oppo')
        .then(res => res.json())
        .then(data => setValues(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-primary'>OPPO</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-10 p-5'>

                {
                    values.map(value => <OppoLoad
                        key={value._id}
                        value={value}
                    ></OppoLoad>
                    )}
                    </div>
        </div>
    );
};

export default Oppo;