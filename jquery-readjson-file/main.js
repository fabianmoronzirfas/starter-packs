// http://api.jquery.com/jquery.getjson/
$(document).ready(function() {


  // Read in the json
  $.getJSON("persons.json", function(data) {
    var persons = []; // will hold the text rendered to the window
    console.log(data);// inspect
    console.log(data[0].name + " is " + data[0].age + " years old"); // get the data
    // loop the data
    $.each(data, function(index, one_person) {
      console.log(index); // which one
      console.log(one_person);// the object/persons
      // access via one_person.name
      // or loop them all
      for (var key in one_person) {
        // always check if the item exists
        if (one_person.hasOwnProperty(key)) {
          //write it out
          console.log(key + " has value " + one_person[key]);
        }
      }
      // push the strings for usage in html
      persons.push("<li id='number-" + index + "'>" + one_person.name + "</li>");
    }); // end of $.each
    // append the strings we have build to the html
    $("<ul/>", {
      "class": "my-new-list",
      html: persons.join("")
    }).appendTo("body");
  }); // end of $.getJSON
});