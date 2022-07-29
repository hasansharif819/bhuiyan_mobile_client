import React from 'react';

const OppoLoad = ({value}) => {
    const {name, img, price} = value;
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
      <div className="badge badge-outline">DETAILS</div>
      <div className="badge badge-outline">ADD TO CART</div>
    </div>
  </div>
</div>
    );
};

export default OppoLoad;