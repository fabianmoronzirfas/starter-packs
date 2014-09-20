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

  var currentdate = new Date();
  var datetime = "Last Export: " +
    currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) +
    "/" + currentdate.getFullYear() +
    " @ " + currentdate.getHours() +
    ":" + currentdate.getMinutes() +
    ":" + currentdate.getSeconds();

    var dataString = 'current_time=' + datetime + '&value=' + value;

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