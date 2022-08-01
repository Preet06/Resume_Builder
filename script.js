function addNeWWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
  let namefield = document.getElementById("namefield").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = namefield;
  document.getElementById("nameT2").innerHTML = namefield;

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactfield").value;

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressfield").value;

  document.getElementById("fbt").innerHTML =
    document.getElementById("fbfield").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instafield").value;

  document.getElementById("LinkDIn").innerHTML =
    document.getElementById("linkedfield").value;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectfield").value;

  let wes = document.getElementsByClassName("weField");
  let str = "";
  const cars = [];
  for (let e of wes) {
    //let str = "";
    //str = str + "<li>" + e.value + "</li>";
    cars.push(e.value);
  }
  console.log(cars);
  weT.innerHTML = "<li>" + cars.join("</li><li>") + "</li>";

  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";
  const cars1 = [];
  for (let e of aqs) {
    //let str1 = "";
    //str1 = str1 + "<li>" + e.value + "</li>";
    cars1.push(e.value);
  }
  console.log(cars1);
  aqT.innerHTML = "<li>" + cars1.join("</li><li>") + "</li>";

  let file = document.getElementById("imgField").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  console.log(file);

  //document.getElementById("imgTemplate").src = reader.result;
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  //window.print();
  //window.open(pdfUrl);

  //const element = document.getElementById("cv-template");

  const element = document.getElementById("cv-template");
  html2pdf().from(element).save();
}
