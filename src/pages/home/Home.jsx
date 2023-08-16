import React from 'react'
import Profile from '../../assets/home1.JPG'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className='home-img' />

      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I'm Anurag Bhardwaj.</span> Web Designer
          </h1> 

          <p className="home-description">
          I'm a India based web designer & front-end developer focused on crafting clean & user-friendly expriences, I'm paassionate about building excilent software that improves the lives of those areound me.
          </p>

          <Link to="./about" className='button'>
            More About Me {''}
            <span className="button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home
