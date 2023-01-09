import React, { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/MainViewPage/Styles.css";
import {
  NavBarComponent, MenuComponent,
  ThemeSwitchComponent
} from "../../components";
import Draggable from "react-draggable";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styled, { ThemeProvider } from "styled-components";
import SettingsContext from "./SettingsContext";
import Settings from "./Settings";
import Timer from "./Timer";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Music from "../../components/MainViewComponent/Music";
import UsuarioComponent from "../../components/TodoComponents/UsuarioComponent";


export const ThemeContext = createContext(null);



const MainView = () => {
  const handle = useFullScreenHandle();
  const [show, toggleShow] = useState(true);
  const [showMusic, setShowMusic] = useState(false);
  const toggleMusic = () => {
    setShowMusic(!showMusic);
  }

  const [showTodo, setShowTodo] = useState(false);
  const toggleTodo = () => {
    setShowTodo(!showTodo);
  }

  //TIMER//
  //Funcion de mostrar TIMER DE POMODORO, le indicamos que showsettings tenga un valor predeterminado de falso que nos servirá para mostrar el timer
  //o los settings, linea 116
  //Cuando estamos viendo el timer y apretamos el boton de settins queremos que nos muestre setting mediante el setShowSettings
  const [showSettings, setShowSettings] = useState(false);
  //Como no teniamos algo que nos seteara los minutos creamos un const
  //como ya estan como state ahora puedo referenciarlos por sus nombres sin nada mas
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  //Pasandole props a fullscreen para que al momento de darle click al boton que está
  //dentro del navbar se active el fullscreen

  /* La función primero comprueba si hay un elemento en pantalla completa utilizando la propiedad fullscreenElement del objeto document. Si hay un elemento en pantalla completa (es decir, si la propiedad no es null), entonces la función llama a exitFullscreen() para salir de la pantalla completa. Si no hay ningún elemento en pantalla completa, entonces la función llama a requestFullscreen() en el elemento documentElement del objeto document para entrar en la pantalla completa. */

  function enterExitFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }


  return (
    <div class="mainViewTimer">
      <FullScreen handle={handle}>
        <NavBarComponent onButtonClick={enterExitFullscreen} />

        <div class="d-flex ms-auto align-items-center">
          <MenuComponent toggleMusic={toggleMusic} toggleTodo={toggleTodo} />

        </div>
        <div>
          <SettingsContext.Provider
            value={{
              showSettings,
              setShowSettings,
              workMinutes,
              breakMinutes,
              //ahora podemos usar estos dos de abajo tanto en settings como en timer
              setWorkMinutes,
              setBreakMinutes,
            }}>
            {showSettings ? <Settings /> : <Timer class="timer-draggable" />}
            {showMusic && <Music />}
            {showTodo && <UsuarioComponent />}
          </SettingsContext.Provider>
        </div>

      </FullScreen>
    </div>
  );
};
export default MainView;
