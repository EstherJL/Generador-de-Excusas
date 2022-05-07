/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusando").innerHTML = excusa();
  });
  //write your code here
  console.log("Hello Rigo from the console!");
};

let excusa = () => {
  let sujeto = ["Mi hermano", "El gato", "La vecina", "Mi esposo"];
  let accion = ["rompio", "perdio", "olvido", "se comio"];
  let que = ["mi tarea"];
  let cuando = [
    "justo antes de salir",
    "ayer por la noche",
    "hace un instante"
  ];

  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    que[queIndex] +
    " " +
    cuando[cuandoIndex]
  );
};
