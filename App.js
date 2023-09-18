document.getElementById("defaultOpen").click();

function openContent(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


  //JQuery to show active button and exclude the rest, and default set to about.
  $(document).ready(function(){
  $(".opal-framed").click(function() {
  $(".opal-framed").parent().addClass('opal-awake');
  $(this).parent().toggleClass( "opal-awake" );
  });
  $(document).ready(function(){
  $("#defaultOpen").parent().closest('div').removeClass('opal-awake')
  });
  });
  
    // Show the current tab, and add an "active" class to the button that opened the tab
  $(document).ready(function(){
  $('#expandButton').click(function(){
  $(".w-d-skills").toggleClass('unhide');
  $("#d-one").toggleClass('turn');
  });
  $('#expandButtonTwo').click(function(){
  $(".p-skills").toggleClass('unhide');
  $("#d-two").toggleClass('turn')
  });
  $('#expandButtonThree').click(function(){
  $(".o-skills").toggleClass('unhide');
  $("#d-three").toggleClass('turn')
  });
  });

  $(document).ready(function(){
    setTimeout(function(){
        $("#expandButton").click();
    },1);

});
  
 
    



  /* Create a backup for the opal, in case it fails. If the custom color isn't found
  then modify the innerHTML to save the page's structure. */
  
 /* To create a 

 go to :

  opal = document.getElementsByClassName("opal");
    for (i = 0; i < opal.length; i++) {
    document.querySelector(".opal").classList.toggle('opal-awake');
    }
  }

 find element by class active, then make it so that it removes the opal-awake
 on-click. make sure this also happens to all of the other children.
 (Add an event listener for onclick) */


    //Get all elements with class = ""

    //Get all elements with class "opal" and add opal-awake back

    //Remove opal awake from the currently active
