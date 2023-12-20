import React from "react";
import { Link } from "react-router-dom";
function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <div className="room">
      <div className="img-container">
        <img src={images[0]} alt="featured-room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/singleroom/${slug}`} className='btn-primary room-link'>Features</Link>
      </div>
      <p className='room-info'>{name}</p>
    </div>
  );
}
 export default Room;