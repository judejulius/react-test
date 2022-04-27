import React from 'react'
import './Css/SecondPage.css'
export default function SecondPage() {
  return (
    <>
    <h1 class="heading">How we did it</h1>
    <div class="container px-4 py-5 below-header" >
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
        <div>
        <div class='number1'></div>

          <h4 class="fw-bold mb-0">Discovery</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
        <div class='number2'></div>

          <h4 class="fw-bold mb-0">Plan</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">   
        <div>
        <div class='number3'></div>

          <h4 class="fw-bold mb-0">Design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
            <div class='number4'></div>
          <h4 class="fw-bold mb-0">Build</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam gravida quis quam accumsan eget aliquam, praesent orci. </p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
