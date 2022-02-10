// apis vars
const passApi = "http://localhost/first_api/apis/hash.php/?pass=";
const blankApi = "http://localhost/first_api/apis/blank.php/?blank=";
const numApi = "http://localhost/first_api/apis/numbers.php/";
const strApi = "http://localhost/first_api/apis/string.php/?name=";

// buttons vars
let btn_pass = document.getElementById("btn-hash");
let btn_blank = document.getElementById("btn-blank");
let btn_pal = document.getElementById("btn-pal");
let btn_equa = document.getElementById("btn-equa");

// inputs vars
let input_hash = document.getElementById("hash");
let input_blank = document.getElementById("extra-space");
let input_pal = document.getElementById("name");
let input_number1 = document.getElementById("nb1");
let input_number2 = document.getElementById("nb2");

//results vars
const hash_result = document.getElementById("hash_result");
const blank_result = document.getElementById("blank_result");
const pal_result = document.getElementById("pal_result");
const equa_result = document.getElementById("equa_result");

// password
async function checkPass(pass) {
  let res = await fetch(passApi + pass);
  let data = await res.json();
  hash_result.innerHTML = data.strong_pass;
}
btn_pass.addEventListener("click", () => {
  if (input_hash.value != 0) {
    checkPass(input_hash.value);
  }
});

// blank space
async function blank(str) {
  let res = await fetch(blankApi + str);
  let data = await res.json();
  blank_result.textContent = data.word;
}
btn_blank.addEventListener("click", () => {
  if (input_blank.value != 0) {
    blank(input_blank.value);
  }
});

// for palindrom
async function checkPalindrome(elem) {
  let res = await fetch(strApi + elem);
  let data = await res.json();
  pal_result.textContent = data.result;
}
btn_pal.addEventListener("click", () => {
  if (input_pal.value != 0) {
    checkPalindrome(input_pal.value);
  } else {
    pal_result.textContent = "Please Enter a word";
    input_pal.focus();
  }
});

// for equation
async function equation(nb1, nb2) {
  let res = await fetch(numApi + `?nb1=${nb1}&nb2=${nb2}`);
  let data = await res.json();
  equa_result.textContent = `Result: ${data.result} `;
}
btn_equa.addEventListener("click", () => {
  if (input_number1.value != 0 && input_number2.value != 0) {
    equation(input_number1.value, input_number2.value);
  } else {
    input_number1.focus();
  }
});
