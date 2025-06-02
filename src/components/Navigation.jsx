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
            <div>
              <RiHome9Line onClick={() => navigate("/home")} />
            </div>
            <div>
              <MdAttachMoney onClick={() => navigate("/home/sales")} />
            </div>
            <div>
              <LuUserRound onClick={() => navigate("/home/clients")} />
            </div>
            <div>
              <BsBox onClick={() => navigate("/home/products")} />
            </div>
            <div>
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