import React, { useEffect, useState } from 'react';
import IphoneLoad from './IphoneLoad';

const Iphone = () => {
    const [values, setValues] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/iPhone')
        .then(res => res.json())
        .then(data => setValues(data))
    }, [])
    return (
        <div>
                <h2 className='text-5xl text-primary'>IPHONE</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-10 p-5'>

                {
                    values.map(value => <IphoneLoad
                        key={value._id}
                        value={value}
                    ></IphoneLoad>
                    )}
                    </div>
        </div>
    );
};

export default Iphone;