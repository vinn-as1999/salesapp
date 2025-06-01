import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import BillingButton from "../components/BillingButton";


const Home = (props) => {

  return (
    <>
      <main className={props.isMobile ? "home-main mobile" : "home-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <section className="graphs">
          <div className="graph-data">
            <label>
              João
            </label>
            <svg width="100" height="100" className="graph">
              <defs>
                <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                </linearGradient>
              </defs>
              <rect className="bar" x="10" y="5" width="150" height="10" fill="url(#barGradient)"></rect>
            </svg>
            <div className="money-value">
              R$ 300,00
            </div>
          </div>
        </section>

        {
          <section className="pendencies">
            <ul>
              <h2 style={{marginLeft: 0}}>João</h2>
              <li>
                <span>Paçoca</span>
                <span>R$ 3,00</span>
                <span>30/05</span>
              </li>
            </ul>
          </section>
        }

        <BillingButton />
      </main>
    </>
  )
}

export default Home;