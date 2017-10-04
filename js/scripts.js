// Back end logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}
Pizza.prototype.newPrice = function(sizeValue, toppingValue) {
  this.price = sizeValue + toppingValue;
}

function Order () {
  this.array = [];
}

Order.prototype.totalCalculator = function () {
  var total = 0;
  this.array.forEach(function (pizza1){
    total += pizza1.price;
  });
  return total;
}

// Front end logic
$(document).ready(function() {
  var order = new Order();
  $("form").submit(function(event) {
  event.preventDefault();
  var pizzaOne = new Pizza($("#sizes :selected").text(), $("#toppings :selected").text());
  var size = parseInt($("#sizes").val());
  var topping = parseInt($("#toppings").val());
  pizzaOne.newPrice(size, topping);
  order.array.push(pizzaOne);
  $("#output1").append("<li>" + "Order:" + order.array.length + "- will come to a total of: $" + pizzaOne.price + "</li>");
});
  $("#purchase").click(function() {
  $("#output1").empty();
  $("#output2").text("Your new total is: $" + order.totalCalculator());
    order.array = [];
});
});
