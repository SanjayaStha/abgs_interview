$(document).ready(function(){
  $("button").click(function(){
    $("#div1").toggleClass("box, box-rot");
  });
  var radioVal = $("input[name='choice']:checked").val();
  console.log(radioVal);

 if(radioVal == "mobile"){
    $("#mobile-select").removeClass("hidden")
 }
 if(radioVal == "pc"){
    $("#pc-select").removeClass("hidden")
 }
 if(radioVal == "tablet"){
    $("#tablet-select").removeClass("hidden")
 }

  $("input[name='choice']").on("click", function() {
    var radioValue = $("input[name='choice']:checked").val();
  console.log(radioValue);

  if(radioValue == "mobile") {
    $("#mobile-select").removeClass("hidden")
    $("#pc-select").addClass("hidden")
    $("#tablet-select").addClass("hidden")
  }
  if(radioValue == "pc") {
    $("#pc-select").removeClass("hidden")
    $("#tablet-select").addClass("hidden")
    $("#mobile-select").addClass("hidden")
    $("#linux").addClass("hidden")
  }
  if(radioValue == "tablet") {
    $("#tablet-select").removeClass("hidden")
    $("#pc-select").addClass("hidden")
    $("#mobile-select").addClass("hidden")
  }
  });
});


function arrRandom() {
  console.log("p")
  var arr = []
  var val = [];

  for (var i = 0; i < 10; i++) {
      val.push('')
  }

  for(i=0; i<10;i++){
      var temp = Math.floor(Math.random() * 100)
      arr.push(temp)

  }

  for (var i = 0; i < arr.length; i++) {
      var digit = Math.floor(arr[i]/10)

       if(digit==0){
          val[0] = val[0] + '*';
          continue;
      }
      if(digit==1){
          val[1] = val[1] + '*';
          continue;
      }
      if(digit==2){
          val[2] = val[2] + '*';
          continue;
      }
      if(digit==3){
          val[3] = val[3] + '*';
          continue;
      }
      if(digit==4){
          val[4] = val[4] + '*';
          continue;
      }
      if(digit==5){
          val[5] = val[5] + '*';
          continue;
      }
      if(digit==6){
          val[6] = val[6] + '*';
          continue;
      }
      if(digit==7){
          val[7] = val[7] + '*';
          continue;
      }
      if(digit==8){
          val[8] = val[8] + '*';
          continue;
      }
      if(digit==9){
          val[9] = val[9] + '*';
          continue;
      }
  }

  document.write("Array:" + arr + "<br>")

  document.write("0-9: " + val[0] + "<br>"+
      "10-19: " + val[1] + "<br>"+
      "20-29: " + val[2] + "<br>"+
      "30-39: " + val[3] + "<br>"+
      "40-49: " + val[4] + "<br>"+
      "50-59: " + val[5] + "<br>"+
      "60-69: " + val[6] + "<br>"+
      "70-79: " + val[7] + "<br>"+
      "80-89: " + val[8] + "<br>"+
      "90-99: " + val[9] + "<br>"
      )
}

arrRandom();