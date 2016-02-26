$(document).ready(function() {
  $(".year").click(function(event) {
    $("#months-" + this.id).slideToggle();
    $(".month-posts").hide();
  });
  $(".month").click(function(event) {
    $(this).next().slideToggle();
  });
});
