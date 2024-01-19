import React, { useEffect, useState } from 'react'
import Container from '../Shared/Container'
import Card from './Card'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    fetch('./rooms.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRooms(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {rooms.map((room, index) => (
          <Card key={index} room={room} />
        ))}
      </div>
    </Container>
  )
}

export default Rooms
