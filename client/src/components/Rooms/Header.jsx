import React from 'react'
import Heading from '../Heading/Heading'

const Header = () => {
  return (
    <div>
      <Heading
        title="Veluvana Bali - Owl Bambo House"
        subtitle="Sidemen, Indonesia"
        center=""
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=626&ext=jpg&ga=GA1.1.1162881527.1690013272&semt=sph"
          alt="Header Image"
        />
      </div>
    </div>
  )
}

export default Header
