import React from 'react'
import './Css/FifthPage.css'

export default function FifthPage() {
  return (
    <>
    <section className="fifthPage-background">
    <div className="container">
  <div className="row">
    <div className="col">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>

        <h1 className="fifthPage-header">Get in touch</h1>
        <p className="paragraph1">info@endcrypt3d.co.za</p>
        <p className="paragraph2">+27 000 0000</p>
        <p className="paragraph3">Work in Progress, 5th Floor, 
           Woodstock Exchange, 
           68 Albert Rd, Woodstock, Cape Town, 7925</p>
    </div>
    <div className="col">
    <div className="screen-body-item">
          <div clasNames="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group message">
                <label></label>
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
            </div>
          </div>
              <button className="fifthPage-button">Send message</button>
        </div>
      </div>
    </div>
    </div>
    <footer>Endcrypt3d Pty Ltd 2020&c</footer>
    </section>
    </>
  )
}
