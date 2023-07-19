import React from 'react'
import { Navbar } from '../Layout/Navbar'
import { useGetPokemonByNameQuery, useGetPokemonsQuery } from '../../service/pokemon'

export const HomeScreen = () => {
  
  return (
    <>
    <div className='flex justify-center  bg-gradient-to-b from-blue-950 via-blue-700 to-blue-200 '>

      <div className='bg-image_primary bg-contain bg-no-repeat w-1/2 h-screen' >
        
      </div>
      <section>
        <h1 className='text-4xl font-bold text-center text-white'>Bienvenido a la tienda de juegos</h1>
      </section>

    </div>
    </>
  )
}

export default HomeScreen