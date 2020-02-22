n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    checkHour(h);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  function checkHour(h) {
        for(i = 8; i <= 17; i++) {
            divID = "#details" + i;
            if(h > i) {
                $(divID).css("background-color", "orchid");
            }
            if(h <= i) {
              $(divID).css("background-color", "#bada55");
            }
            
            
        }
  }
  $("#lock8").on("click", function(event) {
    // This line prevents the page from refreshing when a user hits "enter".
    event.preventDefault();
    // Grab the user input
    var userdetails8 = $("#text8").val().trim();
    // Store the username into localStorage using "localStorage.setItem"
    localStorage.setItem("8AM", userdetails8);
    // And display that name for the user using "localStorage.getItem"
    $("#text8").text(localStorage.getItem("8AM"));
  });
  // By default (upon load) show the name stored in localStorage using "localStorage.getItem"
  $("#text8").text(localStorage.getItem("8AM"));
// ------------


  $("#lock9").on("click", function(event) {
    event.preventDefault();
    var userdetails9 = $("#text9").val().trim();
    localStorage.setItem("9AM", userdetails9);
    $("#text9").text(localStorage.getItem("9AM"));
  });

  $("#text9").text(localStorage.getItem("9AM"));
// ------------
$("#lock10").on("click", function(event) {
  event.preventDefault();
  var userdetails10 = $("#text10").val().trim();
  localStorage.setItem("10AM", userdetails10);
  $("#text10").text(localStorage.getItem("10AM"));
});

$("#text10").text(localStorage.getItem("10AM"));
// --------------
$("#lock11").on("click", function(event) {
  event.preventDefault();
  var userdetails11 = $("#text11").val().trim();
  localStorage.setItem("11AM", userdetails11);
  $("#text11").text(localStorage.getItem("11AM"));
});

$("#text11").text(localStorage.getItem("11AM"));
// --------------
$("#lock12").on("click", function(event) {
  event.preventDefault();
  var userdetails12 = $("#text12").val().trim();
  localStorage.setItem("12AM", userdetails12);
  $("#text12").text(localStorage.getItem("12AM"));
});

$("#text12").text(localStorage.getItem("12AM"));
// --------------
$("#lock13").on("click", function(event) {
  event.preventDefault();
  var userdetails13 = $("#text13").val().trim();
  localStorage.setItem("13PM", userdetails13);
  $("#text13").text(localStorage.getItem("13PM"));
});

$("#text13").text(localStorage.getItem("13PM"));
// --------------
$("#lock14").on("click", function(event) {
  event.preventDefault();
  var userdetails14 = $("#text14").val().trim();
  localStorage.setItem("14PM", userdetails14);
  $("#text14").text(localStorage.getItem("14PM"));
});

$("#text14").text(localStorage.getItem("14PM"));
// --------------
$("#lock15").on("click", function(event) {
  event.preventDefault();
  var userdetails15 = $("#text15").val().trim();
  localStorage.setItem("15PM", userdetails15);
  $("#text15").text(localStorage.getItem("15PM"));
});

$("#text15").text(localStorage.getItem("15PM"));
// --------------
$("#lock16").on("click", function(event) {
  event.preventDefault();
  var userdetails16 = $("#text16").val().trim();
  localStorage.setItem("16PM", userdetails16);
  $("#text16").text(localStorage.getItem("16PM"));
});

$("#text16").text(localStorage.getItem("16PM"));
// --------------
$("#lock17").on("click", function(event) {
  event.preventDefault();
  var userdetails17 = $("#text17").val().trim();
  localStorage.setItem("17PM", userdetails17);
  $("#text17").text(localStorage.getItem("17PM"));
});

$("#text17").text(localStorage.getItem("17PM"));
// --------------
