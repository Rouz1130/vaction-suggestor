$(document).ready(function(){
  $("#answer").submit(function(event){
    event.preventDefault();

    var time = $("input:radio[name=time]:checked").val();
    var explore = $("input:radio[name=explore]:checked").val();
    var relaxation = $("input:radio[name=relax]:checked").val();
    var events = $("input:radio[name=concert]:checked").val();
    var climate = $("input:radio[name=weather]:checked").val();

    if (time === "yes") {
      $("#output").text("We suggest Europe , perhaps Paris");
    }

    if (explore === "yes" || time === "no") {
      $("#output").text("We suggest the Great wall of China");
    }

    if(relaxation === "yes"){
      $("#output").text("We suggest an all inclusive resort in Mexico");
    }

    if(events === "yes") {
      $("#output").text("We suggest maybe go to New york to catch a Yankees game");
    }

    if(climate === "yes") {
      $("#output").text("We suggest you kick back and relax on the beach maybe Purto Rico");
    }

  });
});
