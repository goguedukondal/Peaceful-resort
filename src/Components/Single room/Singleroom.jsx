import React, { useContext, useState } from "react";
import Banner from "../Banner/Banner";
import { RoomContext } from "../Context/Context";
import { Link, useNavigate, useParams } from "react-router-dom";
import StyledHero from "../Styled/Styled";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Singleroom.css";
function Singleroom() {
  const navigate = useNavigate();
  const { getRoom } = useContext(RoomContext);
  const [open, setOpen] = useState(false);
  const [defaultPic, setDefaultpic] = useState();
  const { slug } = useParams();
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className="error">
        <h3>No such room is found</h3>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }
  const handleStripe = () => {
    navigate("/checkout");
  };

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...remainingimages] = images;
  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <StyledHero img={mainImg || defaultPic}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <div className="single-room">
        <div className="single-room-images">
          {remainingimages.map((image, index) => {
            return <img key={index} src={image} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <div className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </div>
          <div className="info">
            <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max Capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "No pets allowed"}</h6>
            <h6>{breakfast && "Free Breakfast included"}</h6>
            <button className="book-now" onClick={() => setOpen(true)}>
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="room-extras">
      <h6>Extras</h6>
        <ul className="extras">
          {extras.map((element,index)=>{
            return <li key={index}>- {element}</li>
          })}
        </ul>
      </div>
      {/* Modal */}
      <Modal open={open} center onClose={onCloseModal}>
      <div className="title">
          <h3 className='display-6'>Glad to meet you here</h3>
        </div>
        <div className="body">
          <p className='small'>Book your room now</p>
          <p className='lead'>Click below to continue with room booking</p>
        </div>
        <div className="footer">
          <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f2/10/51/f210513a-a7fe-00be-808e-490af63f579b/AppIcon-0-1x_U007emarketing-0-5-0-0-85-220-0.png/1200x630wa.png' alt='stripe' width='100px' height='50px' className='stripe-pic' onClick={handleStripe}/>
          {/* <img src='https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png' alt='Razorpay' width='100px' height='50px' className='paypal-pic'/> */}
        </div>
      </Modal>
    </div>
  );
}

export default Singleroom;
