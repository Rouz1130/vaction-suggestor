$(document).ready(function(){
  $("#blanks").submit(function(event){
    event.preventDefault();

    var time = $("#time").val();
    var sightC = $("#sightC").val();
    var relaxing = $("#relaxing").val();
    var concert = $("#concert").val();
    var weather = $("#weather").val();

    if (time === "yes") {
      $("#events").show();
    }


    if (sightC === "yes") {
      $("#sightC").show();
    }


    if (relaxation === "yes") {
      $("#relaxing").show();
    }


    if(events === "yes") {
      $("#concert").show();
    }


    if(climate === "yes") {
      $("#weather").show();
    }

  });
});
