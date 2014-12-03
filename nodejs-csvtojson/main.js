/**
 * Simple csv to json convert example
 * https://github.com/Keyang/node-csvtojson
 */

//Converter Class
var Converter=require("csvtojson").core.Converter;
var fs=require("fs");

var csvFileName="./persons.csv";
var fileStream=fs.createReadStream(csvFileName);
//new converter instance
var csvConverter= new Converter({constructResult:true});

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){
   console.log(jsonObj); //here is your result json object
   console.log(jsonObj[0].name +" is " + jsonObj[0].age + " years old");
   fs.writeFile("./persons.json", JSON.stringify(jsonObj), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
});

//read from file
fileStream.pipe(csvConverter);