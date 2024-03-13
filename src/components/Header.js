import React, { useContext } from "react";
import { Link } from "react-router-dom";
import tit from "../pages/CSS/logo.jpg";
import AuthContext from "../context/AuthContext";
import { logoutFirebase } from "../services/firebaseConfig";
import styles from "../App.css";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="header">
      <ul className="">
        <div className="avatar">
          <div className="w-28 rounded-full">
            <img src={tit} />
          </div>
        </div>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/restaurantes">Restaurantes</Link>
        </li>
        <li>Mercados</li>
        <li>Pets</li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <p onClick={logoutUser}>Desconectar</p>
      </ul>
    </div>
  );
};

export default Header;
