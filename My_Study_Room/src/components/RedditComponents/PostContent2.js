//Este va a servir de base para hacer el contenido de los post dentro del formato que se encuentra en post1blog

import React from "react";
import "./postcontent1.css";

export default function PostContent2() {
  return (
    <div class="postcontent1 card p-3 container mt-5 col-md-8">
      <div class="d-flex justify-content-between align-items-center">
        <div class="user d-flex flex-column align-items-center">
          <h1>La gestión del tiempo</h1>
          <img
            src="https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2018/11/Time_Management_Apps_You_Should_Start_Using_Yesterday_1.jpg?av=205d85987f44f0b5b87a28ae569e8492"
            class="user-img"
          />
          <span>
            <small class="cuerpo1 font-weight-bold">
              La gestión del tiempo, es el proceso de organizar tu tiempo entre
              actividades específicas.
              <br />
              <ul>
                <li>
                  La gestión efectiva del tiempo significa ser capaz de realizar
                  muchas tareas en un tiempo limitado.
                </li>
                <li>
                  La gestión del tiempo no efectiva significa NO ser capaz de
                  priorizar y completar las tareas de forma eficiente.
                </li>
              </ul>
              <br></br>
              <h1>
                La gestión eficaz del tiempo<br></br> te permite:
              </h1>
              <ol>
                <li>Lograr hacer más en menos tiempo</li>
                <li>Priorizar las tareas para cumplir con los plazos claves</li>
                <li>Mejorar la productividad y la calidad del trabajo</li>
                <li>Reducir estrés y mantener la energía</li>
                <li>
                  Establecer un mejor equilibrio entre el trabajo y la vida
                </li>
              </ol>
              <br></br>
              Existen cuatro estrategias clave para gestionar el tiempo de
              manera efectiva e incluyen:
              <br></br>
              <ul>
                <li>
                  Asignar tiempo: Predecir cuánto tardarán en completarse las
                  tareas.
                </li>
                <li>
                  Priorizar las tareas: Decidir qué tareas son más importantes
                  para completar.
                </li>
                <li>
                  Crear un cronograma: Hacer un plan sobre cuándo y cómo se
                  completarán las tareas.
                </li>
                <li>
                  Ser puntual: Completar las tareas antes de la fecha límite y
                  llegar a las reuniones importantes 10 minutos antes.
                </li>
              </ul>
              <ol>
                <li>
                  <h1>ASIGNAR TIEMPO</h1>
                </li>
              </ol>
              Existe la fórmula de cálculo de tiempo para calcular con mayor
              precisión en cuánto tiempo completarás una tarea.
              <br></br>
              La fórmula de cálculo de tiempo (E) es simple. Los tres cálculos
              que necesitas son:
              <ol>
                <li>
                  Cálculo optimista del tiempo (A): Este es el menor tiempo en
                  el que crees que puedes completar la tarea. Esto supone las
                  mejores condiciones donde todo funciona perfectamente.
                </li>
                <li>
                  Cálculo del tiempo más probable (B): Esta es la cantidad
                  realista de tiempo en la que crees que puedes completar la
                  tarea. Esto supone que la tarea progresará de forma promedio
                  (es decir, no son las mejores condiciones, pero tampoco hay
                  demasiadas dificultades).
                </li>
                <li>
                  Cálculo pesimista del tiempo (C): Esta es la mayor cantidad de
                  tiempo en la que crees que puedes completar la tarea. Esto
                  supone las peores condiciones donde enfrentas problemas en
                  cada paso para completar la tarea.
                </li>
              </ol>
              <br></br>
              Al tener en cuenta estos tres cálculos, la fórmula es: E =
              (A+4B+C)/6. Volvamos al dilema de Ana. Usando la fórmula, Ana
              determina que:
              <br />
              <ul>
                <li>A = 4 horas (tiempo de Gisela)</li>
                <li>B = 6 horas (tiempo de 2 compañeros)</li>
                <li>C = 10 horas (tiempo de Juan)</li>
              </ul>
              <br />
              Aplica estos números en la fórmula: E = (4+4*6+10)/6. Entonces,
              determina que le tomará aproximadamente 6 horas y 20 minutos
              completar la escritura de su informe.
              <br />
              <ol start="2">
                <br></br>
                <li>
                  <h1>PRIORIDAD DE TAREAS</h1>
                </li>
              </ol>
              Una manera fácil de priorizar tareas es usar la “matriz de
              Eisenhower”. Esta matriz te ayuda a decidir y priorizar las tareas
              con base en la urgencia y la importancia.
              <br />
              <ul>
                <li>Cuadrante 1 (urgente e importante) = Hacer primero</li>
                <li>Cuadrante 2 (menos urgente e importante) = Programar</li>
                <li>Cuadrante 3 (urgente y menos importante) = Delegar</li>
                <li>
                  Cuadrante 4 (menos urgente y menos importante) = No hacer
                </li>
              </ul>
              <img src="https://economipedia.com/wp-content/uploads/MATRIZ-DE-EISENHOWER.jpg" />
              <ol start="3">
                <li>
                  <h1>CREACIÓN DE CRONOGRAMA</h1>
                </li>
              </ol>
              Consejos para la elaboración de un cronograma
              <br />
              <ol>
                <li>Usa un calendario </li>
                <li>Completa las tareas de rutina primero</li>
                <li>Agrega tus principales prioridades</li>
                <li>
                  Divide los proyectos o tareas grandes en partes pequeños
                </li>
                <li>Usa recordatorios</li>
                <li>Crea un sistema que te resulte práctico</li>
              </ol>
              <ol start="4">
                <li><h1>SER PUNTUAL</h1></li>
              </ol>
              Razones por las que se debe ser puntual: <br /> 
              <ul>
                <li>Respeto</li>
                <li>Plazos</li>
                <li>Objetivos centrados en el equipo</li>
                <li>Credibilidad</li>
                <li>Profesionalismo</li>
              </ul>
            </small>
            <hr></hr>
            <div class="fuentesrow gap-3">
                      <li>
                        <a href="https://www.linkedin.com/pulse/benefits-punctuality-work-yeukai-kajidori/">Fuente  </a>
                        <br></br>
                        <li><a href="https://www.youtube.com/watch?v=tT89OZ7TNwc&t=1s">Video que explica la matriz</a>
                        </li></li>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
