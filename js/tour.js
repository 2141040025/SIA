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




]});









tour.init();

//--------------------------------------------------------------------------------------------------

$("#startTour").click(function(){
    tour.start();
    tour.restart();
});
