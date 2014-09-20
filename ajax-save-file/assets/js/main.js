$(document).ready(function() {


  var sldr = $('#ex1').slider({
    value:0,
    min:-1,
    max:1,
    step:0.0001,
    precision:4,
    formatter: function(value) {
      return 'Current value: ' + value;
    }
  });

  $('#submitit').click(function(e) {
    var value = sldr.slider('getValue');

    var current_time = 123;
    // var tasktitle = $("input#tasktitle").val();
    var dataString = 'current_time=' + current_time + '&value=' + value;

    $.ajax({
      type: "POST",
      url: "save.php",
      data: dataString,
      success: function() {
        $('#submitit').hide(1500, function(){
          console.log("button hidden");
        });
        $('#message').html("Value Logged! ✓ Thank you")
          .hide()
        .fadeIn(1500, function() {
          $('#message').append("");
        });
      }
    });
    return false;

  });
});