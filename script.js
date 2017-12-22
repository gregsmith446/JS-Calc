   var inputLabel = document.getElementById("input"); //global variable for the place the numbers go

   function pushBtn(obj) {

       var pushed = obj.innerHTML;

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
   