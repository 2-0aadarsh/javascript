var form = document.querySelector("form");

var inps = document.querySelectorAll('input[type = "text"]')
var error = document.querySelector("#error");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    for(var i=0; i<inps.length; i++){
        if(inps[i].value.trim() === '') {
            error.textContent = "Error, some field are empty";
            break;
        }
        else{
            error.textContent = "";
        }
    }
    console.log(inps[0].value);
    console.log(inps[1].value);
})

































    
/*var input1 = document.querySelector("#inp1");
  var input2 = document.querySelector("#inp2");   */


    // if(input1.value === '' || input2.value === '') {
    //     error.textContent = "Any one of the input is empty";
    // }
    // else{
    //     error.textContent = "";
    // }