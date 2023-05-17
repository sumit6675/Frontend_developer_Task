var form = document.getElementById('myForm');
var button = document.getElementById('submitButton');
button.disabled=true
button.innerText="Fill All Fields"
form.addEventListener('input', function() {

  var inputs = form.getElementsByTagName('input');
  var empty = false;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      empty = true;
      break;
    }
  }
  if(!empty){
    button.innerText="Submit Form"
  }else{
    button.innerText="Fill All Fields"
  }
  button.disabled = empty;
});
