import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

export default function Background() {
	/* Se crea una constante con el use state que nos va a indicar el valor que viene predeterminado */
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
		const miDiv = document.querySelector(".mainViewTimer");
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
		<Popup
			trigger={
				<button
					type="submit"
					style={{
						color: "white",
						backgroundColor: "transparent",
						border: "none",
					}}
				>
					{" "}
					Fondos
				</button>
			}
			position="right center"
		>
			<div className="Fondos">
				<div className="Studio">
					<button
						style={{ border: "none", backgroundColor: "transparent", marginLeft:"0px" }}
						onClick={() =>
							click(
								"url('https://i.pinimg.com/originals/20/8f/d7/208fd76468afa91714a3bb6d1c6e39b9.gif')"
							)
						}
					>
            <img
          src={require("./hot-drink.png")}
          width="15%"
          style={{ marginRight: "20px", marginLeft: "-30px" }}
        />
						Studio
					</button>
				</div>
				<div className="FondoLluvia">
					<button
						style={{
							border: "none",
							backgroundColor: "transparent",
							marginLeft: "-30px",
						}}
						onClick={() =>
							click(
								"url('https://i.pinimg.com/originals/c2/44/5d/c2445dd759cf52be7e37d294c62d730e.gif')"
							)
						}
					>
						<img
							src={require("./heavy-rain.png")}
							width="15%"
							style={{ marginRight: "20px", marginLeft: "-10px" }}
						/>
						Lluvia
					</button>
				</div>
        <div className="Espada">
					<button
						style={{
							border: "none",
							backgroundColor: "transparent",
							marginLeft: "-30px",
						}}
						onClick={() =>
							click(
								"url('https://i.pinimg.com/originals/b8/83/26/b88326c5a42965963dc961057f66bbf2.gif')"
							)
						}
					>
						<img
							src={require("./sword.png")}
							width="15%"
							style={{ marginRight: "20px", marginLeft: "-10px" }}
						/>
						Espada Pixel
					</button>
				</div>
        <div className="Living">
					<button
						style={{
							border: "none",
							backgroundColor: "transparent",
							marginLeft: "-30px",
						}}
						onClick={() =>
							click(
								"url('https://cdnb.artstation.com/p/assets/images/images/045/637/083/large/arseniy-chebynkin-katrin-room-sunset.jpg?1643191030')"
							)
						}
					>
						<img
							src={require("./living-room.png")}
							width="15%"
							style={{ marginRight: "20px", marginLeft: "-10px" }}
						/>
						Sala de estar
					</button>
				</div>
        <div className="TokyoNoche">
					<button
						style={{
							border: "none",
							backgroundColor: "transparent",
							marginLeft: "-30px",
						}}
						onClick={() =>
							click(
								"url('https://cdna.artstation.com/p/assets/images/images/006/224/282/large/arseniy-chebynkin-tokyo-street-night.jpg?1496921779')"
							)
						}
					>
						<img
							src={require("./half-moon.png")}
							width="15%"
							style={{ marginRight: "20px", marginLeft: "-10px" }}
						/>
						Noche en Tokyo
					</button>
				</div>
			</div>
		</Popup>
	);
}
