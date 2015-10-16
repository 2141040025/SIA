// Instance the tour
var tour = new Tour({
  keyboard: true,
  autoscroll: false,
  storage: false,
  steps: [

//--------------------------------------------------------------------------------------------------

  {
    element: ".tour-001",
    title: "Navegación",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    placement: "right"
  },
  {
    element: ".tour-002",
    title: "Datos Generales",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    placement: "right"
  },
  {
    element: ".tour-003",
    title: "Ocular Navegación",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    placement: "bottom"
  },
  {
    element: ".tour-004",
    title: "Pagina de Inicio",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    placement: "bottom"
  },
  {
    element: ".tour-005",
    title: "Menu Desplegable",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    placement: "bottom"
  },
  {
    element: ".tour-006",
    title: "Información de la Pagina",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    placement: "top"
  },
  {
    element: ".tour-007",
    title: "Contenido de la Pagina",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    placement: "top"
  },  
]});









tour.init();

//--------------------------------------------------------------------------------------------------

$("#startTour").click(function(){
    tour.start();
    tour.restart();
});
