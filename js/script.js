$(document).ready(function() {

  $("table").hide();
  $('#addAnother').hide();
  $("#checkout-btn").hide();


  $('#order-btn').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

    $("table").show();
    $("#addAnother").show();
    $("#checkout-btn").show();
    $("#order-btn").hide();

    $("#size").html($(".size option:selected").text() + " -  " + sizeOfPizza);
    $("#crust").html($(".crust option:selected").text() + " -  " + toppingsOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " -  " + crustOfPizza);
    $("#cost").html("ksh, " + total);

    function Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }

    $('#addAnother').click(function() {
      var sizeOfPizza = $(".size option:selected").val();
      var toppingsOfPizza = $(".toppings option:selected").val();
      var crustOfPizza = $(".crust option:selected").val();
      var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      order = order + 1;
      grandTotal = grandTotal + total;


      var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.toppings + '</td><td id="toppings">' + $(".toppings option:selected").text() + " -  " + newPizza.crust + '</td><td id="total">' + "ksh, " + newPizza.total + '</td></tr>'

      $("#new-pizza").append(newRow);
    });


  });









});
