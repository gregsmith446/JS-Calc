   var inputLabel = document.getElementById("calc"); //global variable for the place the numbers go

   console.log("test");

   function pushBtn(obj) {

       var pushed = obj.innerHTML; //whatever is in the object (1, 2, 3, +, -, /, *, etc)

       if (pushed == "=") {
           inputLabel.innerHTML = eval(inputLabel.innerHTML);
       }
       else if (pushed == "AC") {
           inputLabel.innerHTML = "0";
       }
       else {
           if (inputLabel.innerHTML == "0") {}
           else {
               inputLabel.innerHTML += pushed;
           }
       }
   }

   console.log("function ran");
   