const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

console.log(firstName);

const first_err = document.getElementById("first_error");
const last_err = document.getElementById("last_error");
const mail_err = document.getElementById("mail_error");
const pass_err = document.getElementById("pass_error");

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    e.preventDefault();
    first_err.innerHTML = "First name cannot be empty";
  }
  // firstName.classList.add('error');

  // } else {
  //   firstName.classList.remove('error');
  // }
  // Check last name
  if (lName === "") {
    e.preventDefault();
    last_err.innerHTML = "Last name cannot be empty";
  }
  //   lastName.classList.add("error");
  // } else {
  //   lastName.classList.remove("error");
  // }
  // // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    mail_err.innerHTML='Looks like this is not an email';
  }
  //   email.classList.add("error");
  // } else {
  //   email.classList.remove("error");
  // }

  // Check password

  if (passwordVal === "") {
pass_err.innerHTML = 'Password cannot be emptyß'

  }
    // password.classList.add("error");
  // } else {
  //   password.classList.remove("error");
  // }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
