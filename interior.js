/* code for clock */
setInterval(() => {
  d = new Date();

  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  hRotation = 30 * htime + mtime / 2;
  mRotation = 6 * mtime;
  sRotation = 6 * stime;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);

/* onclick function - to see birds button */

function Sbirds() {
  document.getElementById("birds").style.opacity = "0.8";
  document.getElementById("birds").style.animationName = "birds";
  document.getElementById("Sbirds").style.backgroundColor = "black";
  document.getElementById("Sbirds").style.color = "white";
  setTimeout(() => {
    document.getElementById("birds").style.opacity = "0";
    document.getElementById("birds").style.animationName = "";
    document.getElementById("Sbirds").style.backgroundColor = "#f7e0e0";
    document.getElementById("Sbirds").style.color = "black";
  }, 3000);
}

/* onclick function - to see birds plane */

function plane() {
  document.getElementById("plane").style.opacity = "0.8";
  document.getElementById("outdoor").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("plane").style.opacity = "0";
    document.getElementById("outdoor").style.opacity = "1";
  }, 2500);
}

/* onclick function - to see birds monkey  */

function Smonkey() {
  document.getElementById("peek").style.opacity = "0.8";
  document.getElementById("Smonkey").style.backgroundColor = "black";
  document.getElementById("Smonkey").style.color = "white";
  setTimeout(() => {
    document.getElementById("peek").style.opacity = "0";
    document.getElementById("Smonkey").style.backgroundColor = "#f7e0e0";
    document.getElementById("Smonkey").style.color = "black";
  }, 1000);
}

/* onclick function - to pendulumn visiblility toggle   */

function pendulum() {
  var x = document.getElementById("pendulum");
  if (x.style.opacity == "1") {
    x.style.opacity = "0";
    document.getElementById("Spendulum").style.backgroundColor = "#f7e0e0";
    document.getElementById("Spendulum").style.color = "black";
    document.getElementById("Spendulum").innerHTML = "pendulum";
  } else {
    x.style.opacity = "1";
    document.getElementById("Spendulum").style.backgroundColor = "black";
    document.getElementById("Spendulum").style.color = "white";
    document.getElementById("Spendulum").innerHTML = "hide it";
  }
}

/* onclick function - to wall photo toggle   */

function photo() {
  var x = document.getElementById("painting");
  if (x.style.backgroundImage == "") {
    document.getElementById("painting").style.backgroundImage =
      "url(painting.jpg)";
    document.getElementById("Spainting").style.backgroundColor = "black";
    document.getElementById("Spainting").style.color = "white";
    document.getElementById("Spainting").innerHTML = "undo painting";
  } else {
    document.getElementById("painting").style.backgroundImage = "";
    document.getElementById("Spainting").style.backgroundColor = "#f7e0e0";
    document.getElementById("Spainting").style.color = "black";
    document.getElementById("Spainting").innerHTML = "change painting";
  }
}

/* onclick function - toggle between day & night   */

function night() {
  var x = document.getElementById("container");
  if (x.style.animationName == "") {
    document.getElementById("container").style.animationName = "night";
    document.getElementById("nnnn").style.backgroundColor = "black";
    document.getElementById("nnnn").style.color = "white";
    document.getElementById("nnnn").innerHTML = "Day";
  } else {
    document.getElementById("container").style.animationName = "day";
    document.getElementById("nnnn").style.backgroundColor = "#f7e0e0";
    document.getElementById("nnnn").style.color = "black";
    document.getElementById("nnnn").innerHTML = "Night";
    setTimeout(() => {
      document.getElementById("container").style.animationName = "";
    }, 1000);
  }
}

/* onclick function - light bulb On/Off toggle */

function light_bulb() {
  var x = document.getElementById("bulb");
  if (x.style.zIndex == "2") {
    document.getElementById("bulb").style.zIndex = "-1";
    document.getElementById("Slight_bulb").style.backgroundColor = "#f7e0e0";
    document.getElementById("Slight_bulb").style.color = "black";
    document.getElementById("Slight_bulb").innerHTML = "Lamp On";
  } else {
    document.getElementById("bulb").style.zIndex = "2";
    document.getElementById("Slight_bulb").style.backgroundColor = "black";
    document.getElementById("Slight_bulb").style.color = "white";
    document.getElementById("Slight_bulb").innerHTML = "Lamp Off";
  }
}
