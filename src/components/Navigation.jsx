import { useNavigate } from "react-router-dom";
import { RiHome9Line } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";
import { BsBox } from "react-icons/bs";


function Navigation(props) {
  const navigate = useNavigate();

  return (
    <div>
      {
        props.isMobile ? (
          <nav className="nav-mobile">
            <div onClick={() => navigate("/home")}>
              <RiHome9Line />
            </div>
            <div onClick={() => navigate("/home/sales")}>
              <MdAttachMoney />
            </div>
            <div onClick={() => navigate("/home/clients")}>
              <LuUserRound />
            </div>
            <div onClick={() => navigate("/home/products")}>
              <BsBox />
            </div>
            <div onClick={() => {navigate("/login"); localStorage.clear()}}>
              <GrLogout />
            </div>
          </nav>
        ) : (
          <aside className="aside-pc">
            <div>
              <RiHome9Line onClick={() => navigate("/")} />
            </div>
            <div>
              <MdAttachMoney />
            </div>
            <div>
              <LuUserRound />
            </div>
            <div>
              <BsBox />
            </div>
            <div>
              <GrLogout />
            </div>
          </aside>
        )
      }
    </div>
  )
}

export default Navigation