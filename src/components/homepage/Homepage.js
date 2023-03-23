import React from 'react'
import "./Homepage.css"
import img1 from "../../images/img1.png";
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <>
    <div className='hp-container'>
      <div className='d-flex row'>
        <div>
        <h3 className='creating-text'>Creating Awareness</h3>
        <h2 className='reduce-text'>Reduce.Reuse.Recycle</h2>
        <Link to="/sell">
        <button className='btn-sell'>Sell Now</button>
        </Link>
          <img src={img1} className="hp-img" alt='recycle'/>
          </div>
      </div>
      
    </div>
    <div>
    <h3 className='work-text'>How it works</h3>
    <h4 className='pts-text'>Turn your points into <span className="text-decoration-underline save-line">savings.</span></h4>
    <div className='d-flex col-3 pts-cont'>
      <div className='g-5'>
        <h3 className='text-steps'><span style={{color:"#4B4466"}}>1.</span> Sign up</h3>
        <p className='cont'>Members can use their Recyclebank points to get great deals at local businesses and exclusive discounts on sustainable goods.</p>
      </div>
      <div className='g-5'>
        <h3 className='text-steps'><span style={{color:"#4B4466"}}>2.</span> Earn Points</h3>
        <p className='cont'>Earn points by participating in activities such as planting or adopting trees, joining environmental education programs, taking quizzes, and signing up for newsletters.</p>

      </div>
      <div >
        <h3 className='text-steps'><span style={{color:"#4B4466"}}>3.</span> Redeem Rewards</h3>
        <p className='cont'>Sign up to start earning points. Find out if you are eligible for rewards based on your geographical location.</p>

      </div>

    </div>
  </div>
  </>
  )
}

export default Homepage