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
    title: "Navegación",
    content: "...",
    placement: "right"
  },
            {
              element: ".tour-001-1",
              title: "Plan de Estudios",
              content: "...",
              placement: "right"
            },
            {
              element: ".tour-001-2",
              title: "Kardex",
              content: "Aqui se registran las calificaciones que se van obteniendo durante el ciclo-periodo escolar.",
              placement: "right"
            },

            {
              element: ".tour-001-3",
              title: "Mis Grupos",
              content: "...",
              placement: "right"
            },
            {
              element: ".tour-001-4",
              title: "Reinscripción",
              content: "...",
              placement: "right"
            },
            {
              element: ".tour-001-5",
              title: "Mi Horario",
              content: "Aqui puedes consultar informacion de todas las materias que llevaras este ciclo escolar-periodo.",
              placement: "right"
            },
            {
              element: ".tour-001-7",
              title: "Evaluacion Docente",
              content: "Programa de evaluación y estímulos al desempeño del personal docente.",
              placement: "right"
            },
            {
              element: ".tour-001-8",
              title: "Calificaciones Parciales",
              content: "...",
              placement: "right"
            },                                                                                         
            {
              element: ".tour-001-6",
              title: "Calificaciones Finales",
              content: "...",
              placement: "right"
            },

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

  {
    element: ".tour-002",
    title: "Datos Generales",
    content: "En esta sección se muestra tu foto de perfil, tu nombre y matricula. Para ver tu foto de perfil has clic sobre la foto o presiona con el dedo si estas en dispositivos móviles.",
    placement: "right"
  },
  {
    element: ".tour-003",
    title: "Ocular Navegación",
    content: "Presiona para ocultar la barra de navegación de tu izquierda. Si estas en algún dispositivo móvil este botón mostrara la barra de navegación.",
    placement: "bottom"
  },
  {
    element: ".tour-004",
    title: "Pagina de Inicio",
    content: "Presiona este botón para regresar a la página de inicio.",
    placement: "bottom"
  },
  {
    element: ".tour-005",
    title: "Menu Desplegable",
    content: "Presiónalo para desplegar un menú. Este menú tiene acceso a la página de ‘Mis Datos’ la cual puedes presionar para hacer modificaciones a tu información. También sirve para Cerrar Sesión una vez hayas finalizado tus operaciones.",
    placement: "bottom"
  },
  {
    element: ".tour-006",
    title: "Información de la Pagina",
    content: "Aquí veras el titulo junto con una pequeña descripción de la página por la que navegas.",
    placement: "top"
  },
  {
    element: ".tour-007",
    title: "Contenido de la Pagina",
    content: "Aquí se mostrara la información que estas solicitando en cada una de las páginas de este portal.",
    placement: "top"
  },  
]});









tour.init();

//--------------------------------------------------------------------------------------------------

$("#startTour").click(function(){
    tour.start();
    tour.restart();
});
