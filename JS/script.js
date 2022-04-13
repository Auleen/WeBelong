$(document).ready(function () {
  $(".hide").hide();

  $(".close-button").click(function(){
    $(".hide").hide();
});

  $(".slum1").click(function () {
    $(".hide").hide();
    $(".modal").fadeIn(100);
  });

  $(".marker-usa").click(function () {
    $(".hide").hide();
    $(".modal").fadeIn(300);
  });

  $(".marker-uk").click(function () {
    $(".hide").hide();
    $(".modal").fadeIn(300);
  });

  $(".marker-brazil").click(function () {
    $(".hide").hide();
    $(".modal").fadeIn(300);
  });

})

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});

