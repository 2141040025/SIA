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




]});









tour.init();

//--------------------------------------------------------------------------------------------------

$("#startTour").click(function(){
    tour.start();
    tour.restart();
});
