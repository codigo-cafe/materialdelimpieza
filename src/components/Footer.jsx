import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='flex justify-center items-center flex-col container text-center mx-auto'>
        <p className='text-white'>
          Copyright &copy; Ecommerce Shop 2025.
        </p>
        <hr className='text-gray-500 my-4 w-10'/>
        <p className='text-white'>
          Diseño y Desarrollo
          <a href="https://miguelangelchoqueramirez.netlify.app/" target='_blank' className='text-blue-500 hover:text-blue-600 focus:text-blue-600 transition'> Miguel Ángel Choque Ramírez</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
