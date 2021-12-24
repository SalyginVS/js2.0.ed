let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let out = document.querySelector('div.out');

button.onclick = function() {
  let input = +inputIn.value;
  console.log(input);
  out.innerHTML = input;
  inputIn.value = ''
}