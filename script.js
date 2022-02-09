const passApi = "http://localhost/first_api/apis/hash.php/?pass=";
const blankApi = "http://localhost/first_api/apis/blank.php/?blank=";
const numApi = "http://localhost/first_api/apis/numbers.php/";
const strApi = "http://localhost/first_api/apis/string.php/?name=";

async function checkPass(pass) {
  let res = await fetch(passApi + pass);
  let data = await res.json();
  console.log(data);
}

async function checkPalindrome(elem) {
  let res = await fetch(strApi + elem);
  let data = await res.json();
  console.log(data);
}

async function equation(nb1, nb2) {
  let res = await fetch(numApi + `?nb1=${nb1}&nb2=${nb2}`);
  let data = await res.json();
  console.log(data);
}

async function blank(str) {
  let res = await fetch(blankApi + str);
  let data = await res.json();
  console.log(data);
}
blank("y a h y a");
