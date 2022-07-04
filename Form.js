function myFunction() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let birth = document.getElementById("birth").value;
  let genders = document.querySelectorAll('input[name="gender"]');
  let gender;
  for (const radioButton of genders) {
    if (radioButton.checked) {
      gender = radioButton.value;
      break;
    }
  }
  console.log(gender);
  let mobnum = document.getElementById("mobnum").value;
  let edu = document.getElementById("edu").value;
  let accept = document.getElementById("accept").value;
  if (fname === "") {
    let fname = document.getElementById("first");
    fname.style.display = "block";
    fname.innerHTML = "please enter fname";
  } else if (lname === "") {
    let fname = document.getElementById("second");
    fname.style.display = "block";
    fname.innerHTML = "please enter lname";
  } else if (email === "") {
    let email = document.getElementById("mail");
    email.style.display = "block";
    email.innerHTML = "please enter email";
  } else if (birth === "") {
    let birth = document.getElementById("datebirth");

    email.innerHTML = "please enter birth";
  } else if (mobnum === "") {
    let mobnum = document.getElementById("mobile");
    mobnum.style.display = "block";
    mobnum.innerHTML = "please enter mobilenumber";
  } else {
    document.getElementById("firstname").innerHTML = fname;
    document.getElementById("secondname").innerHTML = lname;
    document.getElementById("mails").innerHTML = email;
    document.getElementById("birthDate").innerHTML = birth;
    document.getElementById("mnum").innerHTML = mobnum;
    document.getElementById("edun").innerHTML = edu;
    document.getElementById("gen").innerHTML = gender;
  }
}
function formFunction() {
  if (document.getElementById("fname").value === "") {
    let fname = document.getElementById("first");
    fname.style.display = "block";
    fname.innerHTML = "please enter fname";
  }
  if (document.getElementById("fname").value !== "") {
    let fname = document.getElementById("first");
    fname.style.display = "none";
  }
  if (document.getElementById("lname").value === "") {
    let fname = document.getElementById("second");
    fname.style.display = "block";
    fname.innerHTML = "please enter lname";
  }
  if (document.getElementById("lname").value !== "") {
    let fname = document.getElementById("second");
    fname.style.display = "none";
  }
  if (document.getElementById("email").value === "") {
    let email = document.getElementById("mail");
    email.style.display = "block";
    email.innerHTML = "please enter email";
  }
  if (document.getElementById("email").value !== "") {
    let email = document.getElementById("mail");
    email.style.display = "none";
  }
  if (document.getElementById("birth").value !== "") {
    let birth = document.getElementById("datebirth");
    birth.style.display = "none";
  }
}

function fnameFunction() {
  if (document.getElementById("fname").value === "") {
    let fname = document.getElementById("first");
    fname.style.display = "block";
    fname.innerHTML = "please enter fname";
  }
}
function lnameFunction() {
  if (document.getElementById("lname").value === "") {
    let fname = document.getElementById("second");
    lname.style.display = "block";
    lname.innerHTML = "please enter lname";
  }
}
function emailFunction() {
  if (document.getElementById("email").value === "") {
    let email = document.getElementById("mail");
    email.style.display = "block";
    email.innerHTML = "please enter email";
  }
}
function birthFunction() {
  if (document.getElementById("birth").value === "") {
    let birth = document.getElementById("birthDate");
    birth.style.display = "block";
    birth.innerHTML = "please enter birth";
  }
}
function genFunction() {
  let genders = document.querySelectorAll('input[name="gender"]');
  let gender;
  for (const radioButton of genders) {
    if (radioButton.checked) {
      gender = radioButton.value;
      break;
    }
  }
  console.log(gender);
  if (gender == "undefined") {
    let gen = document.getElementById("gen");
    gen.style.display = "block";
  }
}
function mobFunction() {
  if (document.getElementById("mobnum").value === "") {
    let mobnum = document.getElementById("mnum");
    mobnum.style.display = "block";
    mobnum.innerHTML = "please enter mobilenumber";
  }
}
function eduFunction() {
  if (document.getElementById("edu").value === "") {
    let edu = document.getElementById("edun");
    edu.style.display = "block";
    edu.innerHTML = "please enter education";
  }
}
