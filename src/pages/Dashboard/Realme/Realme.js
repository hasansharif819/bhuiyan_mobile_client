import React, { useEffect, useState } from 'react';
import RealmeLoad from './RealmeLoad';
import {useQuery} from 'react-query';

const Realme = () => {
    const {data} = useQuery('allRealme', ()=> fetch('http://localhost:5000/realme')
    .then(res => res.json()))
    // const [values, setValues] = useState([]);
    // useEffect( () => {
    //     fetch('realme.json')
    //     .then(res => res.json())
    //     .then(data => setValues(data))
    // }, [])
    return (
        <div>
            <h2 className='text-5xl text-primary'>REALME </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-10 p-5'>

                {
                    data?.map(value => <RealmeLoad
                        key={value._id}
                        value={value}
                    ></RealmeLoad>
                    )}
                    </div>
        </div>
    );
};

export default Realme;