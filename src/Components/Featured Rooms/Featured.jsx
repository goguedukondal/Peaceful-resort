import React, {useContext} from 'react'
import { RoomContext } from '../Context/Context'
import Title from '../Title/Title'
import Loading from '../Loading/Loading';
import Room from '../Room/Room';
function Featured() {
    let {featuredRooms:rooms,loading} =useContext(RoomContext);
    let roomComponents = null;

    if(rooms){
        roomComponents = rooms.map(room=>(
            <Room key={room.id} room={room}/>
        ));
    }
  return (
    <div className='featured-rooms'>
       <Title title='Featured Rooms'/>
       <div className="featured-rooms-center">
      {loading ? <Loading /> : roomComponents}
      </div>
    </div>
  )
}

export default Featured