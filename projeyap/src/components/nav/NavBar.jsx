import { Link } from "react-router-dom";
import "./NavStyle.css";
const NavBar = () => {

  return (
    <>
        <nav className="navbar">
            <div className="left">
                <Link to="/">Anasayfa</Link>
                <div className="dropdown">
                    <button className="dropbtn">Kategoriler</button>
                    <div className="dropdown-content">
                        <Link to="/Man">Erkek</Link>
                        <Link to="/Woman">Kadın</Link>

                    </div>
                </div>

            </div>
            <div className="right">
                <div className="dropdown">
                    <button className="dropbtn">Hesap</button>
                    <div className="dropdown-content">
                        <Link to="/login">Giriş Yap</Link>
                        <Link to="/register">Kayıt Ol</Link>

                    </div>
                </div>
            </div>
        </nav>
        
    </>
    
  );
};

export default NavBar;
