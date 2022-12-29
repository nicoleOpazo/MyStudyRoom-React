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

export const ThemeContext = createContext(null);



const MainView = () => {
  const handle = useFullScreenHandle();
  const [show, toggleShow] = useState(true);

  //TIMER//
  //Funcion de mostrar TIMER DE POMODORO, le indicamos que showsettings tenga un valor predeterminado de falso que nos servirá para mostrar el timer
  //o los settings, linea 116
  //Cuando estamos viendo el timer y apretamos el boton de settins queremos que nos muestre setting mediante el setShowSettings
  const [showSettings, setShowSettings] = useState(false);
  //Como no teniamos algo que nos seteara los minutos creamos un const
  //como ya estan como state ahora puedo referenciarlos por sus nombres sin nada mas
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);


  return (
    <div class="mainViewTimer">
      <FullScreen handle={handle}>
        <NavBarComponent/> 
        
          <div class="d-flex ms-auto align-items-center">
            <MenuComponent/>
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
            {showSettings ? <Settings /> : <Timer class="timer-draggable"/>}
          </SettingsContext.Provider>
        </div>
      </FullScreen>
    </div>
  );
};
export default MainView;
