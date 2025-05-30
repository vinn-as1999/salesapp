import { useEffect, useState } from "react";
import { RiHome9Line } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { BsClockHistory, BsBox } from "react-icons/bs";


const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menu = [<RiHome9Line />, <MdAttachMoney />, <FaRegUser />, <BsClockHistory />, <BsBox />, <GrLogout />]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  return (
    <>
      <main className={isMobile ? "home-main mobile" : "home-main pc"}>
        {
          isMobile ? (
            <nav className="nav-mobile">
              {menu.map(item => (
                <div key={item}>{item}</div>
              ))}
            </nav>
          ) : (
            <aside className="aside-pc">
              {menu.map(item => (
                <div key={item}>{item}</div>
              ))}
            </aside>
          )
        }

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
              R$ 20
            </div>
          </div>
        </section>

        <section className="pendencies">
          <ul>
            <h2>João</h2>
            <li>
              <span>Paçoca</span>
              <span>R$ 3,00</span>
              <span>30/05</span>
            </li>
          </ul>
        </section>

        <footer>
          <button>
            COBRANÇA AUTOMÁTICA
          </button>
        </footer>
      </main>
    </>
  )
}

export default Home;