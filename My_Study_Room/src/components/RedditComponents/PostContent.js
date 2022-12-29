//Este va a servir de base para hacer el contenido de los post dentro del formato que se encuentra en post1blog

import React from "react";
import "./postcontent1.css";

export default function PostContent() {
  return (
    <div class="postcontent1 card p-3 container mt-5 col-md-8">
      <div class="d-flex justify-content-between align-items-center">
        <div class="user d-flex flex-column align-items-center">
          <h1>Mentalidad de crecimiento</h1>
          <img
            src="https://woc.aises.org/sites/default/files/styles/image730x495/public/March2020-Student-Illo-BLOGPOST-FNL.jpg?itok=sfPCAQLh"
            class="user-img"
          />
          <span>
            <small class="font-weight-bold">
              Una <bold>mentalidad</bold> es una manera de pensar que te ayudará
              en cualquier tipo de situación que se te podría presentar, en tu
              trabajo o en la vida en general. <br></br> <br></br>
              <h1>Mentalidades</h1> <br></br>
              Mentalidad de crecimiento: es creer que las habilidades más
              básicas que tienes pueden desarrollarse mediante dedicación y
              esfuerzo, la inteligencia y el talento son tan solo el punto de
              partida. <br></br>Persistencia: Tener persistencia significa que
              intentarás las cosas una y otra vez. Con cada intento, te acerca
              un poco más al éxito. <br />
              Responsabilidad personal: significa asumir la responsabilidad de
              nuestras acciones, mediante el esfuerzo, el cumplimiento con los
              compromisos y no poner excusas <br />
              Orientación hacia al futuro: significa establecer metas para el
              fututo, comprender cómo las acciones de hoy impactan en esas metas
              y verificar con frecuencia el progreso para lograrlas.<br></br>
              <br></br>
              <h1>Habilidades de comportamiento</h1> <br></br> Comunicación:
              Comunicación es la capacidad de transmitir un mensaje con claridad
              a diferentes tipos de personas, utilizando una variedad de
              herramientas para recibir y difundir información. <br></br>Gestión
              del tiempo: Es la habilidad de utilizar tu tiempo de forma eficaz
              y productiva, priorizando las tareas y cumpliendo los plazos de
              los proyectos.
            </small>
          </span>
        </div>
      </div>
    </div>
  );
}
