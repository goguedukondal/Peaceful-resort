import React, { useState, useEffect } from "react";
import items from "../data";

export const RoomContext = React.createContext();

function RoomProvider({children}) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    const formatData = (items) => {
      let tempItems = items.map((item) => {
        let id = item.sys.id;
        let images = item.fields.images.map((image) => image.fields.file.url);

        let room = { ...item.fields, images, id };
        return room;
      });
      return tempItems;
    };
    

    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    setState((prevState) => ({
      ...prevState,
      rooms: rooms,
      sortedRooms:rooms,
      featuredRooms: featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize,
    }));
  }, []);
  

  const getRoom =(slug)=>{
    let tempRooms=[...state.rooms];
    const room =tempRooms.find((room)=>room.slug===slug);
    return room;
  }

  const handleChange=(event)=>{
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState((prevState) => {
      const newState = { ...prevState, [name]: value };
      filterRooms(newState); // Call filterRooms with the updated state
      return newState;
    });
  }
  function filterRooms(state) {
    const { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      state;

    let tempRooms = [...rooms];

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= price);

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setState({ ...state, sortedRooms: tempRooms });
  };


  return (
    <RoomContext.Provider
        value={{
          ...state,
          getRoom:getRoom,
          handleChange:handleChange
        }}
      >
        {children}
      </RoomContext.Provider>
  );
}

export default RoomProvider;
