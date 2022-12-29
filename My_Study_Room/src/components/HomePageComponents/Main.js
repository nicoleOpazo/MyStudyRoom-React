import React from "react";
/* import "../Index.css"; */

const MainComponent = () => {
  return (
    <div class="container">
      <header class="masthead">
        <div class="mainblur container">
          <div class="masthead-subheading">Bienvenido a My Study Room</div>
          <div class="logo">
            <img
              src={require("../assets/HomePageAssets/logo.png")}
              alt="logo"
              class="imgLogo"
            />
            <div class="saludo2 masthead-heading text">
              ¿Todo listo para estudiar?
              <a
                class="sesion btn btn-primary btn-xl text-uppercase mt-5 me-5"
                href="/Login"
              >
                Inicia sesión
              </a>
              <a
                class="sesion btn btn-primary "
                href="/MainView"
              >
                Continua como invitado
              </a>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainComponent;
