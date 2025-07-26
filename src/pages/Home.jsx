import { useEffect, useState, useContext } from "react";
import Navigation from "../components/Navigation";
import BillingButton from "../components/BillingButton";
import { ClientsContext } from "../contexts/ClientsContext";
import Empty from "../components/Empty";
import { IoCheckmarkDone } from "react-icons/io5";


const Home = (props) => {
  const {clients, setClients, pending, pendingValues} = useContext(ClientsContext);

  return (
    <>
      <main className={props.isMobile ? "home-main mobile" : "home-main pc"}>
        <Navigation isMobile={props.isMobile} />

        <section className="graphs">

          {
            pendingValues.length > 0 ?
              pendingValues.map((value, index) => (
                <div className="graph-data" key={index}>
                  <label title={value.name}>
                    {value.name}
                  </label>

                  <svg width="100" height="100" className="graph">
                    <defs>
                      <linearGradient id="barGradient" x1="0%" y1="0%" x2="30%" y2="0%">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <rect className="bar" x="0" y="5" width={(value.value * 10) / 5} height="10" fill="url(#barGradient)" />
                  </svg>

                  <div className="money-value">
                    R$ {(value.value).toFixed(2)}
                  </div>
                </div>
              )) : <div className="no-pending">
                    <IoCheckmarkDone size={60} />
                    <h1>Sem pendências.</h1>
                   </div>
          }
        </section>

        {
          <section className="pending">
            <ul>
              {
                pending.length > 0
                  ? pending.map((pending, index) => (
                      <div key={index} className="data-container">
                        <h2 style={{marginLeft: 0}}>{pending.client}</h2>
                        <li>
                          <span>{pending.product}</span>
                          <span>{pending.price}</span>
                          <span>{pending.date}</span>
                        </li>
                      </div>
                    ))
                  : <Empty />
              }
            </ul>
          </section>
        }

        <BillingButton />
      </main>
    </>
  )
}

export default Home;