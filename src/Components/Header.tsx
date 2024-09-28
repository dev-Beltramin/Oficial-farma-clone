
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { RiShoppingBasket2Line } from "react-icons/ri";

import logo from "../images/logo.svg"
import style from "./Header.module.scss"


const Header = () => {
    return (
        <div>
            <header className={style.container_header}>
                <div className={style.container_header__content}>
                    <img src={logo} alt="Logo do site" />

                    <div className={style.container_header__source}>
                        <input type="text" placeholder="Oque está buscando hoje?" />
                        <button><FaSearch /></button>
                    </div>

                    <div className={style.container_header__login}>
                       
                           <p> <BsPerson   /></p>
                       
                        <div>

                            <span className={style.container_header__login__link}>

                                <a href="">Faça seu login </a>
                                <a href="">Ou cadastre-se </a>
                            </span>
                        </div>



                        <span className={style.container_header__login__car}>
                            <RiShoppingBasket2Line fontSize={24} />
                        </span>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header