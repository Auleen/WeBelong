$(document).ready(function () {
    $(".hide").hide();
  
    $(".close-button").click(function(){
      $(".hide").hide();
  });
  
    $(".someBlock").click(function () {
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
  
  });
  