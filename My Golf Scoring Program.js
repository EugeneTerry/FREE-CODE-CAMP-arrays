
//<!DOCTYPE html>
//<html>
//<body>

  //<form>
    //Stroke: <input id="stroke" type="number" name="stroke"><br>
   // Par: <input id="par" type="number" name="par"><br>
    //<input id="btn" type="submit" value="Submit"><br> 
  //</form>

  //<h2 id="myText"></h2>
    
//</body>
//</html>

var btn = document.getElementById("btn");

function golfScore(par, strokes) {
  if (strokes == 1) {
    console.log ("Hole-in-one!")
    document.getElementById("myText").innerHTML = "Hole-in-one!";
  }else if (par == strokes) {
    console.log ("Par")
    document.getElementById("myText").innerHTML = "Par";
  }else if (strokes <= par - 2) {
    console.log ("Eagle")
    document.getElementById("myText").innerHTML = "Go Home";
  }else if (strokes == par - 1) {
    console.log ("Birdie")
    document.getElementById("myText").innerHTML = "Birdie";
  }else if (strokes == par + 1) {
    console.log ("Bogey")
    document.getElementById("myText").innerHTML = "Bogey";
  }else if (strokes == par + 2) {
    console.log ("Double Bogey")
    document.getElementById("myText").innerHTML = "Double Bogey";
  }else if (strokes > par + 2) {
    console.log ("Go Home!")
   document.getElementById("myText").innerHTML = "Go Home";
  }
  
}

btn.addEventListener("click", (e)=> {
  e.preventDefault();
  var par = parseInt(document.getElementById("par").value);
  var stroke = parseInt(document.getElementById("stroke").value);  

  golfScore(par,stroke);
})
