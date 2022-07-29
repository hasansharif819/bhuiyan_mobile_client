import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const RealmeLoad = ({value}) => {
    const {name, _id, img, price} = value;

    const navigate = useNavigate();
    const handleDetails = id => {
      // console.log( id );
      navigate(`/realme/${id}`);
    }
     return (
        <div className="card w-80 bg-secondary shadow-xl pt-5">
  <figure><img width={200} height={250} src={img} alt="Samsung" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">${price}</div>
    </h2>
    {/* <p>{ram} & {display}</p> */}
    <div className="card-actions justify-end">
    
      <div className="badge badge-outline card-actions m-2">
          <Link to={`/realme/${value._id}`}>
            <button onClick={() => handleDetails(_id)}>DETAILS</button>
          </Link>
      </div>
     
      
      <div className="badge badge-outline">ADD TO CART</div>
    
    </div>
  </div>
</div>
    );
};

export default RealmeLoad;