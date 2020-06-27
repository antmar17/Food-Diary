

//returns list of all foods by search
function makeRequest(foodName){
var filteredName=foodName.replace(" ","%20")
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var key="hiEZZJhDvog7Xx5ImwbM93H1AGSth0ApZXcGQJTY"
var xhttp =  new XMLHttpRequest();
var data="NOPE"


xhttp.onreadystatechange = function() {
    console.log(this.readyState)
    console.log(this.status)
    if (this.readyState == 4 && this.status == 200) {
        data=(this.responseText)

    }
  };
var url="https://api.nal.usda.gov/fdc/v1/foods/search?api_key="+key+"&query="+foodName+"dataType= Foundation Foods"
xhttp.open("GET",url , false);
xhttp.send(null);

return JSON.parse(data)
}


var foodList=makeRequest("chicken")
console.log(foodList["foods"])



//calculate Basil Metabolic rate of man or woman (man parameter is a boolean)

function BMS(man,height_ft,height_in,weight_lb,age_years){
//  convert from lb to kg
    var weight_kg = weight_lb/2.205
    
//  convert height to cm
    var height_cm=(height_ft*30.48)+(height_in*2.54)
    
    //use Harris-Benedict Equation to calculate
    if (man){
        return 88.362+(13.397*weight_kg)+(4.799*height_cm)-(5.667*age_years)
    }
    else{
        return  447.593 +(9.247 * weight_kg) + (3.098* height_cm) - (4.330*age_years)
    }
}


