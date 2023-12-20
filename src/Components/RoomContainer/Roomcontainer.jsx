import React from 'react'
import Roomfilter from './Roomfilter'
import Roomlist from './Roomlist'
import Loading from '../Loading/Loading'
import { RoomContext } from '../Context/Context'
import { useContext } from 'react'
export default function Roomcontainer() {
    const {loading,sortedRooms,rooms} =useContext(RoomContext);
    if (loading) {
        return <Loading/>
    }
  return (
    <>
        <Roomfilter rooms={rooms}/>
        <Roomlist rooms={sortedRooms}/>
    </>
  )
}
