import React from "react";

const ServiciosComponent = () => {
  return (
    <section class="page-section bg-light">
      <div class="container">
        <div class="servicios text-center align-items-center">
          <div class="container-xl">
            <div class="titulo">
              <h1>En nuestra página encontrarás</h1>
            </div>
            <br></br>
            <div class="flex-wrapper row">
              <div class="tag col-xl-3 col-md-6 d-flex align-items-stretch">
                <div class="iconoytexto">
                  <div class="icono">
                  <i class="far fa-clock fa-3x"></i>
                  </div>
                  <br></br>
                  <h4>Timer</h4>
                  <p>Tiempos de trabajo y descansos personalizables</p>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex align-items-stretch ">
                <div class="iconoytexto">
                  <div class="icono">
                    <i class="far fa-lightbulb fa-3x"></i>
                  </div>
                  <br></br>
                  <h4>Tips/Consejos</h4>
                  <p>PRONTO</p>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex align-items-stretch ">
                <div class="iconoytexto color-grey">
                  <div class="icono">
                  <i class="fas fa-calendar-alt fa-3x"></i>
                  </div>
                  <br></br>
                  <h4>Calendario</h4>
                  <p>PRONTO</p>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex align-items-stretch ">
                <div class="iconoytexto">
                  <div class="icono">
                  <i class="fas fa-cog fa-3x"></i>
                  </div>
                  <br></br>
                  <h4>Ajustes</h4>
                  <p>Configura todo a tu gusto</p>
                </div>
              </div>
            </div>
            <div class="contenido"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosComponent;
