user = document.getElementById("Użytkownik");
password = document.getElementById("Hasło");
loginBtn = document.getElementById("login");
message = document.getElementById("response");
card = document.querySelector(".card");
let userBase = [
  { username: "admin", userpass: "admin" },
  { username: "TymoteuszStr", userpass: "MojeHasło" },
];

let validUser = false;

loginBtn.addEventListener("click", () => {
  enteredPasword = password.value;
  enteredEmail = user.value;
  userBase.forEach((currUser) => {
    console.log(enteredEmail, enteredPasword);
    if (
      currUser.username == enteredEmail &&
      currUser.userpass == enteredPasword
    ) {
      console.log("Poprawne");
      validUser = true;
    } else {
      console.log("Niepoprawne");
    }
  });
  console.log(validUser);
  if (validUser == true) {
    console.log("tu działa");
    window.location.href = "index2.html";
  } else {
    card.style.height = "60vh";
    message.innerHTML = "Niepoprawne hasło lub email";
  }
});
