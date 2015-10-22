// Instance the tour
var tour = new Tour({
  keyboard: true,
  autoscroll: false,
  storage: false,
  steps: [

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

  {
    element: ".tour-001",
    title: "Seleccio de Materia",
    content: "Selecciona las materias que desees cursar y el grupo en el que la desees tomar dándole clic sobre el icono",
    placement: "top"
  },

  {
    element: ".tour-002",
    title: "Periodo",
    content: "Este es el periodo correspondiente de la materia a cursar.",
    placement: "top"
  },

  {
    element: ".tour-003",
    title: "Nombre de la Materia",
    content: "Materia a seleccionar",
    placement: "top"
  },

  {
    element: ".tour-005",
    title: "Creditos",
    content: "Creditos de la materia.",
    placement: "top"
  },
  {
    element: ".tour-004",
    title: "Oportunidades",
    content: "Las asignaturas con una oportunidad de inscripción o examen seran señaladas aquí.",
    placement: "top"
  },

  {
    element: ".tour-006",
    title: "Plan de Estudios",
    content: "Aquí te puedes orientar en cuanto a que materias debes elegir dependiendo tu plan de estudio y las materias seriadas.",
    placement: "right"
  },

  {
    element: ".tour-007",
    title: "Mis Grupos",
    content: "Haz una revisión general de las materias que quieras elegir antes de seleccionarlas.",
    placement: "right"
  },

  {
    element: ".tour-008",
    title: "Mi Horario",
    content: "Si deseas ver el horario que llevas seleccionado da clic sobre esta opción.",
    placement: "right"
  },
  {
    element: ".tour-009",
    title: "Mis Datos",
    content: "Antes de finalizar, asegúrate de que hayas llenado los campos obligatorios de tu información.",
    placement: "bottom"
  },
  {
    element: ".tour-010",
    title: "Ficha de pago",
    content: "Al terminar de seleccionar tu horario da clic sobre el botón continuar para imprimir tu ficha de pago. <br /><br />Revisa tus materias antes de continuar.",
    placement: "top"
  },



]});









tour.init();

//--------------------------------------------------------------------------------------------------

$("#reinscripTour").click(function(){
    tour.start();
    tour.restart();
});
