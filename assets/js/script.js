// contact part
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("resutl").innerText = `First Name: ${fName},
   Last Name:  ${lName},
   Email:  ${email},
   Message:   ${message}`;

  console.log();
  e.target.reset();
});
