import React, { createContext, useCallback, useState } from "react";
import "../../pages/MainViewPage/Styles.css";
import { ThemeSwitchComponent } from "../../components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";


const NavBarComponent = ({infoButtom, handleOnClick,onButtonClick}) => {
    const [show, toggleShow] = useState(true);
    const handle = useFullScreenHandle();

    return (
       /*  <FullScreen handle={handle}>  */
        <div className="nav-bar">
            {/*Dentro de nav-bar:
                1. Barra de navegación principal
                2. Botón notificaciones
                3. Botón Zen fullscreen mode
                4. Theme switch */}
            <div class="cont-head ">
                <nav class="navbar d-flex ms-auto">
                    <div class="navbar-nav">
                        <div class="d-flex align-items-center">
                            <a href="/Profile">
                                <button class="btn-avatar btn-dark px-1 me-2">
                                    <i class="fas fa-user-alt"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </nav>
                {/* Botón de notificaciones */}
                <div className="boton-notificaciones">
                    <button
                        className="btn btn-dark btn-notificaiones px-1 me-2"
                        onClick={() => toggleShow(!show)}>
                        <i class="fas fa-bell fa-lg"></i>
                    </button>
                    {/* Dropdown notificaciones */}
                    <div class="position-relative">
                        {!show && (
                            <ul className="cont-not position-absolute top-0 end-0">
                                <li className="li-noti">
                                    <div>
                                        <h5 style={{ color: "white" }}>Importante 1</h5>
                                    </div>
                                </li>
                                <h1></h1>
                                <li className="li-noti">
                                    <h5 style={{ color: "white" }}>Notificación 2</h5>
                                </li>
                                <li className="li-noti">
                                    <h5 style={{ color: "white" }}>Notificación 3</h5>
                                </li>
                            </ul>)}
                    </div>
                </div>
                {/* Botón Zen (para pantalla completa) */}
                <div className="boton-zen">
                    <button
                        type="button"
                        class="btn-zen btn-dark px-1 me-3"
                        onClick={onButtonClick}>
                        <i class="fas fa-expand fa-lg"></i>
                    </button>
                </div>
                <ThemeSwitchComponent round={true} />
            </div>
        </div>
        /* </FullScreen> */

    );
};
export default NavBarComponent;
/*
<nav class="navbar d-flex ms-auto">
            <div class="navbar-nav">
                <div class="d-flex align-items-center">
                    <a href="/probando">
                        <button class="btn-avatar btn-dark px-1 me-2">
                            <i class="fas fa-user-alt"></i>
                        </button>
                    </a>
                </div>
            </div>
        </nav>
        */