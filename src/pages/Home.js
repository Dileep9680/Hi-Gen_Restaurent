import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/Banner.jpg'
import '../styles/Homestyles.css'
const Home = () => {
  return (
    <>
     <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Hi-Gen Restuarent</h1>
          <p>Know for the quality since 1997</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Home