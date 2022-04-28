import React from 'react'
import './Css/SecondPage.css'
export default function SecondPage() {
  return (
    <>
    <h1 className="heading">How we did it</h1>
    <div className="container px-4 py-5 below-header" >
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        <div>
        <div className='number1'>01</div>

          <h4 className="fw-bold mb-5">Discovery</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
        <div className='number2'>02</div>

          <h4 className="fw-bold mb-5">Plan</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">   
        <div>
        <div className='number3'>03</div>

          <h4 className="fw-bold mb-5">Design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
            <div className='number4'>04</div>
          <h4 className="fw-bold mb-5">Build</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
