import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

export default function Background() { /* Se crea una constante con el use state que nos va a indicar el valor que viene predeterminado */
/* Se crea ahora la const click, que me va a setear el atributo que quiero, que en este caso es el color  */
const [image, setColor] =
  useState(); /* ("url('https://img.freepik.com/foto-gratis/fondo-acuarela-pintada-mano-forma-cielo-nubes_24972-1095.jpg?w=2000')") */
const click = (image) => {
  setColor(image);
};
/* En las dependencias del useEffect vamos a especificar el color que está en la const [color,setColor] */
/* Esto lo que dice, es que cada vez que el valor de color cambia, El useEffect va a ser llamado. */
/* Luego definimos el valor de color mediate un codigo de html  */
useEffect(() => {
    const miDiv = document.querySelector('.mainViewTimer');
miDiv.style.backgroundImage = image;
}, [image]);

return (
  //Al boton se la asigna el onClick, con un arrowfunction que me va poner el nuevo color de fondo que quiero
  //Ahora vamos a utilizar un useEffect para cambiar el color de fondo por lo que definimos la funcion de useeffect arriba

/*     <button
    type="submit"
    style={{ color: "white" , backgroundColor:"transparent", border:"none"}}
    onClick={() =>
      click(
        "url('https://as01.epimg.net/meristation/imagenes/2021/02/08/noticias/1612786479_151283_1612786596_noticia_normal.jpg')"
      )
    }
  >
    Fondos
  </button> */
  <Popup trigger={<button type="submit"
  style={{ color: "white" , backgroundColor:"transparent", border:"none"}}> Fondos</button>} position="right center">
      <div className="Fondos">
          <div className="OnePiece">
          <button style={{border:"none" , backgroundColor:"transparent"}} onClick={() =>
      click(
        "url('https://as01.epimg.net/meristation/imagenes/2021/02/08/noticias/1612786479_151283_1612786596_noticia_normal.jpg')"
      )
    }>Fondo One Piece</button>
          </div>
          <div className="fondo2">
              <button>Hola</button>
          </div>

      </div>


</Popup>
);
}
