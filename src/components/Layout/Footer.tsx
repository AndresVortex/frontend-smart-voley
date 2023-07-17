import React from 'react'

export const Footer = () => {
  return (
    <footer className='grid grid-cols-1 mt-20 gap-4 p-8 sm:grid-cols-2 sm:mt-0 bg-slate-300 dark:bg-blue-950 dark:text-white' >
      <section className='col-span-1'>
        <h2 className='text-2xl text-center ' >Mas información de la pagina web</h2>
        <p className='text-justify' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quidem. Quisquam, quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut facilis pariatur vero soluta nobis similique aut sed odit, quae voluptatum eum iusto quia. Corporis adipisci praesentium eligendi, sed aut possimus.
        </p>
      </section>
      <section className='flex flex-col items-center sm:flex-row justify-around w-full col-span-1 '>
        <div className='w-full flex flex-col items-center'>
          <h2 className='text-2xl text-center ' >Redes sociales</h2>
          <div>
            <i></i>
            <span> LinkedIn </span>
          </div>
          <div>
            <i></i>
            <span> Facebook </span>
          </div>
          <div>
            <i></i>
            <span> Instagram </span>
          </div>
          <div>
            <i></i>
            <span> Twitter </span>
          </div>

        </div>
        <div className='w-full flex flex-col items-center' >
          <h2 className='text-2xl text-center '>Información de contacto</h2>
          <div >
            <i></i>
            <span> Pais, departamento, ciudad </span>
          </div>
          <div>
            <i></i>
            <span> Numero telefonico </span>
          </div>
          <div>
            <i></i>
            <span> Correo electronico </span>
          </div>

        </div>
      </section>

    </footer>
  )
}
