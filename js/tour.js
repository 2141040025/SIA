// Instance the tour
var tour = new Tour({
  keyboard: true,
  autoscroll: false,
  steps: [

//--------------------------------------------------------------------------------------------------

  {
    element: ".tour-001",
    title: "Navegación",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, praesentium, repellat cum consequatur, doloribus dolor odit natus facilis inventore eaque non! Ut vero quas deleniti, impedit fuga aut maxime facere.",
    placement: "right"
  },

  {
    element: ".tour-004",
    title: "Datos Generales",
    content: "Foto del alumno. <br/>Nombre del alumno<br/>Matricula",
    placement: "right"
  },    
  {
    element: ".tour-002",
    title: "Ocultar menu",
    content: "Si estas en dispositivos como escritorios o tabletas, esconder la barra de navegación es de gran ayuda cuando quieres esconder informacion que no necesitas como el menu de la izquierda. <br />Si estas en dispositivos mobiles como celulares y tabletas pequeñas, este boton sirve para mostrar la barra de navegación.",
    placement: "bottom"
  },
  {
    element: ".tour-003",
    title: "Menu",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est repudiandae asperiores voluptatibus beatae quos architecto et quasi nobis, adipisci inventore at laborum optio nemo eum alias porro, quas illo cum.",
    placement: "bottom"
  },



]});









tour.init();

//--------------------------------------------------------------------------------------------------

$("#startTour").click(function(){
    tour.start();
    tour.restart();
});
