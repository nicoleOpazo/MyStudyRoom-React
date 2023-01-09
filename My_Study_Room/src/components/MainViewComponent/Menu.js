import React from "react";
import "./Menu.css";
import { useState } from "react";
import * as mdb from 'mdb-ui-kit'; //lib
import Draggable from "react-draggable";
import Background from "../BackgroundComponents/Background";
import Music from "./Music";

const MenuComponent = (props) => {
    const [show, toggleShow] = useState(false);

    return (
        <div class="widthMenu">
            <div class="">
                <button className="btn-menu-logo position-absolute top-10 start-0" onClick={() => toggleShow(!show)}>
                    <img src={require('../assets/MainViewAssets/pomo-logo.png')} className="img-logo"></img>
                    <i class="fas fa-angle-double-down fa-lg"></i>
                </button>
            </div>

            {show &&
                <ul class="ulMenu">
                    <li class="liMenu">
                        <div
                            className="d-flex d-row align-items-center">
                            <i class="fas fa-bars"></i>
                            <h5 style={{ color: 'white' }}>Menú</h5>
                        </div>
                    </li>

                    <h1></h1>

                    <li class="liMenu">
                        <button
                            className="btn-menu align-items-center">
                            <i class="fas fa-lightbulb fa-lg"></i>
                            <small style={{ color: 'white' }}> <a href="/reddit">Tips & Consejos</a></small>
                        </button>
                    </li>

                    <li class="liMenu">
                        <button onClick={props.toggleTodo}
                            className="btn-menu align-items-center">
                            <i class="fas fa-sliders-h fa-lg"></i>
                            <small style={{ color: 'white' }}>To - Do List</small>
                        </button>
                    </li>

                    <li class="liMenu">
                        <button
                            className="btn-menu align-items-center" onClick={props.toggleMusic}>
                            <i class="fas fa-headphones fa-lg"></i>
                            <small style={{ color: 'white' }}>Música</small>
                        </button>
                    </li>

                    {/* <li class="liMenu">
                        <button
                            className="btn-menu align-items-center">
                            <i class="fas fa-sticky-note fa-lg"></i>
                            <small style={{ color: 'white' }}>Notas</small>
                        </button>
                    </li> */}

                    <li class="liMenu">
                        <button
                            className="btn-menu align-items-center">
                            <i class="fas fa-images fa-lg"></i>
                            <small><Background /></small>
                        </button>
                    </li>

                    {/* <li class="liMenu">
                        <button
                            className="btn-menu align-items-center">
                            <i class="fas fa-calendar-alt fa-lg"></i>
                            <small style={{ color: 'white' }}>Calendario</small>
                        </button>
                    </li>

                    <li class="liMenu">
                        <button
                            className="btn-menu align-items-center">
                            <i class="fas fa-file-import fa-lg"></i>
                            <small style={{ color: 'white' }}>Sube tu archivo</small>
                        </button>
                    </li> */}
                </ul>}
        </div>
    );
};
export default MenuComponent;


/* <div class="widthMenu " >
    <div class="">
        <button className="btn-menu-logo position-absolute top-0 start-0" onClick={() => toggleShow(!show)}>
            <img src={require('../assets/MainViewAssets/pomo-logo.png')} className="img-logo"></img>
            <i class="fas fa-angle-double-down fa-lg"></i>
        </button>
    </div>

    {!show &&
        <ul class="ulMenu ">
            <li class="liMenu">
                <div
                    className="d-flex d-row align-items-center">
                    <i class="fas fa-bars"></i>
                    <h5 style={{ color: 'white' }}>Menú</h5>
                </div>
            </li>

            <h1></h1>

            <li class="liMenu">
                <button
                    className="btn-menu align-items-center">
                    <i class="fas fa-lightbulb fa-lg"></i>
                    <h5 style={{ color: 'white' }}>Tips & Consejos</h5>
                </button>
            </li>

            <li class="liMenu">
                <button
                    className="btn-menu align-items-center">
                    <i class="fas fa-sliders-h fa-lg"></i>
                    <h5 style={{ color: 'white' }}>Configuración</h5>
                </button>
            </li>

            <li class="liMenu">
                <button
                    className="btn-menu align-items-center">
                    <i class="fas fa-headphones fa-lg"></i>
                    <h5 style={{ color: 'white' }}>Música</h5>
                </button>
            </li>

            <li class="liMenu">
                <button
                    className="btn-menu align-items-center">
                    <i class="fas fa-sticky-note fa-lg"></i>
                    <h5 style={{ color: 'white' }}>Notas</h5>
                </button>
            </li>

            <li class="liMenu">
                <button
                    className="btn-menu align-items-center">
                    <i class="fas fa-images fa-lg"></i>
                    <h5 style={{ color: 'white' }}>Fondos</h5>
                </button>
            </li>

            <li class="liMenu">
                <button
                    className="btn-menu align-items-center">
                    <i class="fas fa-calendar-alt fa-lg"></i>
                    <h5 style={{ color: 'white' }}>Calendario</h5>
                </button>
            </li>

            <li class="liMenu">
                <button
                    className="btn-menu align-items-center">
                    <i class="fas fa-file-import fa-lg"></i>
                    <h5 style={{ color: 'white' }}>Sube tu archivo</h5>
                </button>
            </li>




        </ul>}
</div> */
