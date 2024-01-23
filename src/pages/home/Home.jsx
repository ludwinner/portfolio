import React from 'react'
import Profile from '../../assets/fotoyo.jpeg'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import './home.css'


const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img'/>
      
      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>Hola soy Said</span> Desarrollador Web
          </h1>
          <p className='home__description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptatibus maxime fuga optio aliquam expedita maiores laudantium nisi exercitationem distinctio unde, magni, rerum quibusdam quos minus consequatur animi commodi assumenda?
          </p>

          <Link to='/about' className='button'>
            mas sobre mi{''}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
    
      <div className='color__block'></div>
    </section>
  )
}

export default Home