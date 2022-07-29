import React from 'react';
import {useParams} from "react-router-dom";

const Details = () => {
    const {productId} = useParams();
    console.log(productId);
    return (
        <div>
            <h2>Hello Details</h2>
        </div>
    );
};

export default Details;